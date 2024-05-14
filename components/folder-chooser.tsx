"use client";

import { Record } from "@/musicdata/data";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FolderChooserProps {
  record: Record;
  selectOne: (e: string) => void;
  selectTwo: (e: string) => void;
}

const FolderChooser = ({
  record,
  selectOne,
  selectTwo,
}: FolderChooserProps) => {
  return (
    <div className="pt-6 px-6">
      <Select onValueChange={record.name === "P1" ? selectOne : selectTwo}>
        <SelectTrigger className="w-full text-gray-600">
          <SelectValue
            className="text-gray-600"
            placeholder={record.placeholder}
          />
        </SelectTrigger>
        <SelectContent>
          {record.folders.map((f) => (
            <SelectItem className="text-gray-600" key={f.code} value={f.code}>
              {f.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FolderChooser;
