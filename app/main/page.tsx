"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createData, Folder, Exercise } from "@/musicdata/data";
import React, { useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Main() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [folderOne, setFolderOne] = useState<Folder>();
  const [folderTwo, setFolderTwo] = useState<Folder>();
  const [currentExe, setCurrentExe] = useState<Exercise | undefined>(undefined);
  const data = createData();

  const selectFolderOne = (e: string) => {
    setFolderOne(undefined);
    const folder: Folder | undefined = data.records[0].folders.find(
      (f) => f.code === e,
    );
    setFolderOne(folder);
  };

  const selectFolderTwo = (e: string) => {
    setFolderTwo(undefined);
    const folder: Folder | undefined = data.records[1].folders.find(
      (f) => f.code === e,
    );
    setFolderTwo(folder);
  };

  const play = (code: string) => {
    data.records.forEach((r) => {
      r.folders.forEach((f) => {
        f.exercises.forEach((ex) => {
          if (ex.code === code) {
            setCurrentExe(ex);
          }
        });
      });
    });
  };

  const pause = () => {
    setCurrentExe(undefined);
  };

  if (isLoaded && !isSignedIn) {
    router.push("/");
  }

  if (!isLoaded) {
    return (
      <main className="h-screen bg-yellow-100">
        <div className="container mx-auto flex flex-col h-full items-center justify-center">
          <p className="oczekiwanie cursor-not-allowed uprawnienia Użytkownika"></p>
        </div>
      </main>
    );
  }

  return (
    <div className="md:h-screen">
      <div className="container mx-auto flex flex-col h-full items-center justify-center">
        <div
          className="pt-5 md:pt-0 w-full md:w-[872px] flex border-b-2 border-b-yellow-500 
          items-center justify-between pb-2 md:pb-3"
        >
          <h2 className="text-base md:text-xl font-semibold text-[#f2b80f] drop-shadow-md">
            Gamy i pasaże
          </h2>
          <div className="flex items-center justify-start gap-2">
            {user && (
              <p className="text-gray-600  text-[10px] md:text-sm font-bold">
                {user.firstName} {user.lastName}
              </p>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>

        {currentExe ? (
          <div className="mt-5 bg-white p-4 w-full md:w-[872px] text-center text-xs font-bold text-gray-600 rounded-xl">
            {currentExe.description}
          </div>
        ) : (
          <div className="mt-5 bg-white p-4 w-full md:w-[872px] text-center text-xs font-bold text-gray-600 rounded-xl">
            brak odtwarzanego ćwiczenia
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 gap-x-0 md:gap-x-8 mt-3 mb-5 p-0">
          {data.records.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-xl w-full md:w-[420px] md:min-w-[420px] min-h-[560px]"
            >
              <div className="flex px-8 pt-8  items-center justify-center">
                <div
                  className="bg-yellow-400 rounded-full w-[100px] h-[100px] min-w-[100px] min-h-[100px]
                flex items-center justify-center"
                >
                  <div
                    className="bg-yellow-100 rounded-full min-w-[50px] min-h-[50px] flex
                  items-center justify-center"
                  >
                    <p className="text-xl tracking-tight font-bold text-gray-600">
                      {r.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 px-6">
                <Select
                  onValueChange={
                    r.name === "P1" ? selectFolderOne : selectFolderTwo
                  }
                >
                  <SelectTrigger className="w-full text-gray-600">
                    <SelectValue
                      className="text-gray-600"
                      placeholder={r.placeholder}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {r.folders.map((f) => (
                      <SelectItem
                        className="text-gray-600"
                        key={f.code}
                        value={f.code}
                      >
                        {f.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {r.name === "P1" && folderOne && (
                <div className="pt-2 pb-4">
                  <div className="px-8 mt-1 flex flex-col md:flex-row justify-center md:justify-between">
                    <p className="font-bold text-xs text-center md:text-left  text-gray-600 tracking-tight ">
                      {folderOne.name} ({r.name})
                    </p>
                    <p className="font-bold text-center md:text-right text-xs text-gray-600 tracking-tight ">
                      {folderOne.numberOfTracks}
                    </p>
                  </div>
                  <div className="max-h-[330px] overflow-y-scroll mt-4 px-8">
                    {folderOne.exercises.map((t) => (
                      <div
                        key={t.code}
                        className="bg-yellow-100 rounded-md p-4 mb-4"
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="text-xs font-bold text-gray-600 flex items-center justify-center bg-yellow-400 rounded-md w-[60px] h-[25px] p-2">
                            {t.name}
                          </div>

                          {!currentExe ||
                          (currentExe && currentExe.code === t.code) ? (
                            <AudioPlayer
                              showDownloadProgress={false}
                              showSkipControls={false}
                              showFilledProgress={false}
                              showFilledVolume={false}
                              autoPlay={false}
                              loop={true}
                              showJumpControls={false}
                              src={t.path}
                              onPlay={() => play(t.code)}
                              onPause={pause}
                            />
                          ) : (
                            <p className="min-h-[88px] flex items-center justify-center bg-red-200/40 p-2 w-full rounded-xl">
                              <p className="text-[9px] md:text-xs text-center font-bold text-red-500 ">
                                zatrzymaj bieżące ćwiczenie
                              </p>
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {r.name === "P1" && !folderOne && (
                <div className="mt-10 min-h-[330px] flex items-center justify-center py-8">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Image
                        src="/cde-logo.png"
                        alt="Music Cde Logo"
                        width={120}
                        height={60}
                        className="mb-1"
                      />
                      <p className="text-center text-xs text-gray-600">
                        Proszę wybrać folder
                        <br />z płyty {r.desc}, aby wyświetlić
                        <br />
                        dostępne ćwiczenia
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {r.name === "P2" && folderTwo && (
                <div className="pt-2 pb-4">
                  <div className="px-8 mt-1 flex flex-col md:flex-row justify-center md:justify-between">
                    <p className="font-bold text-xs text-center md:text-left  text-gray-600 tracking-tight ">
                      {folderTwo.name} ({r.name})
                    </p>
                    <p className="font-bold text-center md:text-right text-xs text-gray-600 tracking-tight ">
                      {folderTwo.numberOfTracks}
                    </p>
                  </div>
                  <div className="max-h-[330px] overflow-y-scroll mt-4 px-8">
                    {folderTwo.exercises.map((t) => (
                      <div
                        key={t.name}
                        className="bg-yellow-100 rounded-md p-4 mb-4"
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="text-xs font-bold text-gray-600 flex items-center justify-center bg-yellow-400 rounded-md w-[60px] h-[25px] p-2">
                            {t.name}
                          </div>
                          {!currentExe ||
                          (currentExe && currentExe.code === t.code) ? (
                            <AudioPlayer
                              showDownloadProgress={false}
                              showSkipControls={false}
                              showFilledProgress={false}
                              showFilledVolume={false}
                              autoPlay={false}
                              loop={true}
                              showJumpControls={false}
                              src={t.path}
                              onPlay={() => play(t.code)}
                              onPause={pause}
                            />
                          ) : (
                            <p className="min-h-[88px] flex items-center justify-center bg-red-200/40 p-2 w-full rounded-xl">
                              <p className="text-[9px] md:text-xs text-center font-bold text-red-500 ">
                                zatrzymaj bieżące ćwiczenie
                              </p>
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {r.name === "P2" && !folderTwo && (
                <div className="mt-10 min-h-[330px] flex items-center justify-center py-8">
                  <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <Image
                        src="/cde-logo.png"
                        alt="Music Cde Logo"
                        width={120}
                        height={60}
                        className="mb-1"
                      />
                      <p className="text-center text-xs text-gray-600">
                        Proszę wybrać folder
                        <br />z płyty {r.desc}, aby wyświetlić
                        <br />
                        dostępne ćwiczenia
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 mb-6 md:mb-0">
          <p className="md:hidden text-gray-600 text-center text-[10px]">
            Autor książki - Antoni Janaszewski
            <br />
            Opracowanie akompaniamentów - Karol Kozan
            <br />
            Realizacja nagrań - Karol Kozan
            <br />
            Realizacja aplikacji - Andrzej Herman, Piotr Goetzen
          </p>
          <p className="hidden md:block text-gray-600 text-center text-[11px]">
            Autor książki - Antoni Janaszewski
            <br />
            Opracowanie akompaniamentów i realizacja nagrań - Karol Kozan
            <br />
            Realizacja aplikacji - Andrzej Herman, Piotr Goetzen
          </p>
        </div>
      </div>
    </div>
  );
}
