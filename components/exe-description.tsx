"use client";

import React from "react";
import { Exercise } from "@/musicdata/data";

interface ExeDescriptionProps {
  exercise: Exercise | undefined;
}

export default function ExeDescription({ exercise }: ExeDescriptionProps) {
  return exercise ? (
    <div className="mt-5 bg-white p-4 w-full md:w-[940px] text-center text-xs font-bold text-gray-600 rounded-xl">
      {exercise.description}
    </div>
  ) : (
    <div className="mt-2 bg-white p-4 w-full md:w-[940px] text-center text-xs font-bold text-gray-600 rounded-xl">
      brak odtwarzanego ćwiczenia
    </div>
  );
}
