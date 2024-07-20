"use client";

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import React from "react";
import { UserResource } from "@clerk/types";

interface HeaderProps {
  user: UserResource | null | undefined;
}

export default function Header({ user }: HeaderProps) {
  return (
    <div
      className="pt-5 md:pt-0 w-full md:w-[940px] flex border-b-2 border-b-yellow-500
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
        <SignOutButton redirectUrl="/">
          <Button variant="scales" size="sm" className="text-xs ml-2">
            Wyloguj się
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
}
