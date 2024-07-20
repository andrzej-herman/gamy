"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InstrumentChooserProps {
  name: string;
  active: boolean;
  toolTipText: string;
}

export default function InstrumentChooser({
  name,
  active,
  toolTipText,
}: InstrumentChooserProps) {
  const router = useRouter();

  const openBooks = () => {
    router.push("/books");
  };

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          {active ? (
            <div
              className="mb-5 bg-white hover:bg-yellow-200 rounded-xl text-center w-full md:w-[460px]
  font-bold text-gray-600 hover:text-yellow-800 text-xl py-3 cursor-pointer"
              onClick={openBooks}
            >
              {name}
            </div>
          ) : (
            <div
              className="mb-5 bg-white rounded-xl text-center w-full md:w-[460px]
          font-bold text-gray-400 text-xl py-3"
            >
              {name}
            </div>
          )}
        </TooltipTrigger>
        <TooltipContent>{toolTipText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
