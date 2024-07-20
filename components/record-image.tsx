"use client";

import { Record } from "@/musicdata/data";
import React from "react";

interface RecordImageProps {
  record: Record;
}

const RecordImage = ({ record }: RecordImageProps) => {
  return (
    <div className="flex px-8 pt-8 items-center justify-center">
      <div
        className="w-full bg-yellow-100 rounded-xl min-w-[100px] min-h-[50px] flex
                  items-center justify-center text-sm tracking-tight font-bold text-gray-600 px-5"
      >
        <div className="flex flex-col space-y-2 text-center py-3">
          <div>{record.title}</div>
          <div>{record.subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default RecordImage;
