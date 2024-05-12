"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createP1, createP2, Exercise } from "@/musicdata/data";
import React, { useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Main() {
  const [selectedExerciceOne, setSelectedExerciceOne] = useState<
    Exercise | undefined
  >();

  const [selectedExerciceTwo, setSelectedExerciceTwo] = useState<
    Exercise | undefined
  >();

  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  const p1 = createP1();
  const p2 = createP2();

  const selectExerciseOne = (e: string) => {
    const exe: Exercise | undefined = p1.exercises.find((x) => x.code === e);
    if (exe) {
      setSelectedExerciceOne(exe);
    }
  };

  const selectExerciseTwo = (e: string) => {
    const exe: Exercise | undefined = p2.exercises.find((x) => x.code === e);
    if (exe) {
      setSelectedExerciceTwo(exe);
    }
  };

  if (isLoaded && !isSignedIn) {
    router.push("/");
  }

  if (!isLoaded) {
    return (
      <main className="h-full bg-yellow-100">
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

        <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-8 mt-5">
          {/*P1*/}
          <div className="bg-white rounded-xl md:min-w-[420px] min-h-[760px]">
            <div className="flex px-8 pt-8  items-center justify-center">
              <div className="bg-yellow-400 rounded-full w-[150px] h-[150px] min-w-[150px] min-h-[150px] flex items-center justify-center">
                <div className="bg-yellow-100 rounded-full min-w-[75px] min-h-[75px] flex items-center justify-center">
                  <p className="text-xl tracking-tight font-bold text-gray-600">
                    P1
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8 px-8">
              {p1 && (
                <Select onValueChange={selectExerciseOne}>
                  <SelectTrigger className="w-full text-gray-600">
                    <SelectValue
                      className="text-gray-600"
                      placeholder="Wybierz numer ćwiczenia z płyty pierwszej"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {p1.exercises.map((c) => (
                      <SelectItem
                        className="text-gray-600"
                        key={c.code}
                        value={c.code}
                      >
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            {selectedExerciceOne ? (
              <div className="pt-4 pb-8">
                <div className="px-8 mt-5 flex justify-between">
                  <p className="font-bold text-xs text-gray-600 tracking-tight ">
                    {selectedExerciceOne.name} (P1)
                  </p>
                  <p className="font-bold text-xs text-gray-600 tracking-tight ">
                    dostępne podkłady: {selectedExerciceOne.numberOfTracks}
                  </p>
                </div>

                <div className="max-h-[390px] overflow-y-scroll mt-8 px-8">
                  {selectedExerciceOne.tracks.map((t) => (
                    <div
                      key={t.name}
                      className="bg-yellow-100 rounded-md p-4 mb-4"
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="text-xs font-bold text-gray-600 flex items-center justify-center bg-yellow-400 rounded-full w-[25px] h-[25px] p-2">
                          {t.name}
                        </div>
                        <audio controls controlsList="nodownload">
                          <source src={t.path} type="audio/mp3" />
                        </audio>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-10 min-h-[390px] flex items-center justify-center py-8">
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
                      Proszę wybrać ćwiczenie
                      <br />z płyty nr 1, aby wyświetlić
                      <br />
                      dostępne podkłady muzyczne
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/*P2*/}
          <div className="bg-white rounded-xl md:min-w-[420px] min-h-[760px] mb-6 md:mb-0">
            <div className="flex px-8 pt-8 items-center justify-center">
              <div className="bg-yellow-400 rounded-full w-[150px] h-[150px] min-w-[150px] min-h-[150px] flex items-center justify-center">
                <div className="bg-yellow-100 rounded-full min-w-[75px] min-h-[75px] flex items-center justify-center">
                  <p className="text-xl tracking-tight font-bold text-gray-600">
                    P2
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-8 px-8">
              {p2 && (
                <Select onValueChange={selectExerciseTwo}>
                  <SelectTrigger className="w-full text-gray-600">
                    <SelectValue
                      className="text-gray-600"
                      placeholder="Wybierz numer ćwiczenia z płyty drugiej"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {p2.exercises.map((c) => (
                      <SelectItem
                        className="text-gray-600"
                        key={c.code}
                        value={c.code}
                      >
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            {selectedExerciceTwo ? (
              <div className="pt-4 pb-8">
                <div className="px-8 mt-5 flex justify-between">
                  <p className="font-bold text-xs text-gray-600 tracking-tight ">
                    {selectedExerciceTwo.name} (P2)
                  </p>
                  <p className="font-bold text-xs text-gray-600 tracking-tight ">
                    dostępne podkłady: {selectedExerciceTwo.numberOfTracks}
                  </p>
                </div>

                <div className="max-h-[390px] overflow-y-scroll mt-8 px-8">
                  {selectedExerciceTwo.tracks.map((t) => (
                    <div
                      key={t.name}
                      className="bg-yellow-100 rounded-md p-4 mb-4"
                    >
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="text-xs font-bold text-gray-600 flex items-center justify-center bg-yellow-400 rounded-full w-[25px] h-[25px] p-2">
                          {t.name}
                        </div>
                        <audio controls controlsList="nodownload">
                          <source src={t.path} type="audio/mp3" />
                        </audio>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-10 min-h-[390px] flex items-center justify-center py-8">
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
                      Proszę wybrać ćwiczenie
                      <br />z płyty nr 2, aby wyświetlić
                      <br />
                      dostępne podkłady muzyczne
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
