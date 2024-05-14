"use client";

import { createData, Folder, Exercise } from "@/musicdata/data";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import "react-h5-audio-player/lib/styles.css";

import Footer from "@/components/footer";
import NoFolder from "@/components/nofolder";
import FolderData from "@/components/folder-data";
import ExeDescription from "@/components/exe-description";
import RecordImage from "@/components/record-image";
import FolderChooser from "@/components/folder-chooser";
import Header from "@/components/header";
import NotAuth from "@/components/not-auth";

export default function Main() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();
  const [folderOne, setFolderOne] = useState<Folder>();
  const [folderTwo, setFolderTwo] = useState<Folder>();
  const [currentExe, setCurrentExe] = useState<Exercise | undefined>();
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
    return <NotAuth />;
  }

  return (
    <div className="md:h-screen">
      <div className="container mx-auto flex flex-col h-full items-center justify-center">
        <Header user={user} />
        <ExeDescription exercise={currentExe} />
        <div className="flex flex-col md:flex-row items-center justify-between gap-y-8 gap-x-0 md:gap-x-8 mt-3 mb-5 p-0">
          {data.records.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-xl w-full md:w-[420px] md:min-w-[420px] min-h-[560px]"
            >
              <RecordImage record={r} />
              <FolderChooser
                record={r}
                selectOne={selectFolderOne}
                selectTwo={selectFolderTwo}
              />

              {r.name === "P1" && folderOne && (
                <FolderData
                  record={data.records[0]}
                  folder={folderOne}
                  currentExercise={currentExe}
                  play={play}
                  pause={pause}
                />
              )}
              {r.name === "P1" && !folderOne && (
                <NoFolder record={data.records[0]} />
              )}
              {r.name === "P2" && folderTwo && (
                <FolderData
                  record={data.records[1]}
                  folder={folderTwo}
                  currentExercise={currentExe}
                  play={play}
                  pause={pause}
                />
              )}
              {r.name === "P2" && !folderTwo && (
                <NoFolder record={data.records[1]} />
              )}
            </div>
          ))}
        </div>
        <Footer page="main" />
      </div>
    </div>
  );
}
