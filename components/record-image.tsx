"use client";

import { Record } from "@/musicdata/data";
import React from "react";

interface RecordImageProps {
  record: Record;
}

const RecordImage = ({ record }: RecordImageProps) => {
  return (
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
            {record.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordImage;
