"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import Footer from "@/components/footer";
import Header from "@/components/header";
import NotAuth from "@/components/not-auth";
import InstrumentChooser from "@/components/instrument-chooser";

export default function Choice() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

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
        <div className="mt-5 bg-white p-4 w-full md:w-[940px] text-center text-xl font-bold text-gray-600 rounded-xl">
          Wybierz grupę instrumentów
        </div>
        <div className="mt-5 flex flex-row items-center justify-between flex-wrap md:w-[940px]">
          <InstrumentChooser
            name="dęte drewniane"
            active={false}
            toolTipText="Sekcja w przygotowaniu"
          />
          <InstrumentChooser
            name="dęte blaszane"
            active={true}
            toolTipText="6 książek"
          />
          <InstrumentChooser
            name="smyczkowe"
            active={false}
            toolTipText="Sekcja w przygotowaniu"
          />
          <InstrumentChooser
            name="szarpane"
            active={false}
            toolTipText="Sekcja w przygotowaniu"
          />
        </div>
        <Footer page="main" />
      </div>
    </div>
  );
}
