"use client";

import { Exercise, Folder, Record } from "@/musicdata/data";
import React from "react";
import AudioPlayer from "react-h5-audio-player";

interface FolderDataProps {
  record: Record;
  folder: Folder;
  currentExercise: Exercise | undefined;
  play: (code: string) => void;
  pause: () => void;
}

const FolderData = ({
  record,
  folder,
  currentExercise,
  play,
  pause,
}: FolderDataProps) => {
  return (
    <div className="pt-2 pb-4">
      <div className="px-8 mt-1 flex flex-col md:flex-row justify-center md:justify-between">
        <p className="font-bold text-xs text-center md:text-left  text-gray-600 tracking-tight ">
          {folder.name} ({record.name})
        </p>
        <p className="font-bold text-center md:text-right text-xs text-gray-600 tracking-tight ">
          {folder.numberOfTracks}
        </p>
      </div>
      <div className="max-h-[330px] overflow-y-scroll mt-4 px-8">
        {folder.exercises.map((t) => (
          <div key={t.name} className="bg-yellow-100 rounded-md p-4 mb-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="text-xs font-bold text-gray-600 flex items-center justify-center bg-yellow-400 rounded-md w-[60px] h-[25px] p-2">
                {t.name}
              </div>
              {!currentExercise ||
              (currentExercise && currentExercise.code === t.code) ? (
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
  );
};

export default FolderData;
