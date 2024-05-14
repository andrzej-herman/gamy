"use client";

import { Record } from "@/musicdata/data";
import Image from "next/image";
import React from "react";

interface NoFolderProps {
  record: Record;
}

export default function NoFolder({ record }: NoFolderProps) {
  return (
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
            <br />z płyty {record.desc}, aby wyświetlić
            <br />
            dostępne ćwiczenia
          </p>
        </div>
      </div>
    </div>
  );
}
