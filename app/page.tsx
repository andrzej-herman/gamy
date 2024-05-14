"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { SignUpButton, SignInButton, useUser } from "@clerk/nextjs";
import Footer from "@/components/footer";

const font = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
});

export default function Home() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  if (isLoaded && isSignedIn) {
    router.push("/main");
  }

  return (
    <div className="md:h-screen py-6 md:py-0">
      <div className="container mx-auto h-full">
        <div className="h-full min-h-max flex flex-col items-center justify-center">
          <section className="h-full min-h-max flex flex-col items-center justify-center">
            <div className="space-y-6 text-center pb-8">
              <div className="space-y-2">
                <div className="hidden md:flex items-center justify-center">
                  <Image
                    src="/cde-logo.png"
                    alt="Music Cde Logo"
                    width={200}
                    height={110}
                    className="mb-2"
                  />
                </div>
                <div className="md:hidden flex items-center justify-center">
                  <Image
                    src="/cde-logo.png"
                    alt="Music Cde Logo"
                    width={120}
                    height={110}
                    className="mb-2"
                  />
                </div>
                <h1
                  className={cn(
                    "text-3xl md:text-6xl font-semibold text-[#f2b80f] drop-shadow-md",
                    font.className,
                  )}
                >
                  Gamy i pasaże
                </h1>
              </div>
              <p className="px-4 text-gray-600 text-sm md:text-lg font-semibold">
                Podkłady muzyczne do książki Gamy i pasaże - nowe spojrzenie{" "}
                <br className="hidden md:block" />
                wydawnictwa CDE-Music
              </p>
              <div
                className="flex flex-col md:flex-row items-center
              justify-center gap-y-4 md:gap-y-0 gap-x-7 px-2 md:px-0"
              >
                <SignInButton mode="modal">
                  <Button
                    variant="scales"
                    size="default"
                    className="text-sm md:text-base w-full md:w-auto"
                  >
                    Zaloguj się
                  </Button>
                </SignInButton>

                <SignUpButton mode="modal">
                  <Button
                    variant="scales"
                    size="default"
                    className="text-sm md:text-base w-full md:w-auto"
                  >
                    Utwórz konto Użytkownika
                  </Button>
                </SignUpButton>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl bg-opacity-80">
              <p className="md:max-w-[750px] text-gray-600 text-center text-xs md:text-sm">
                Aplikacja z podkładami muzycznymi do książki{" "}
                <span className="text-black font-bold">
                  Gamy i pasaże - nowe spojrzenie
                </span>{" "}
                wydawnictwa CDE-Music.
              </p>
              <p className="md:max-w-[700px] text-gray-600 text-center text-xs md:text-sm pt-3 md:pt-4">
                Książka skierowana jest do osób ćwiczących indywidualnie jak i
                grupowo, o różnym zaawansowaniu muzycznym, uczniów różnych form
                kształcenia muzycznego po zespoły instrumentalne zawierając
                ćwiczenia we wszystkich tonacjach, gam durowych, molowych oraz
                chromatycznych.
              </p>
              <p className="md:max-w-[700px] text-gray-600 text-center text-xs md:text-sm pt-3 md:pt-4">
                Innowacją książki jest możliwość realizacji danego ćwiczenia
                przez wszystkie tonacje, jak i ćwiczenie w ramach jednej
                tonacji. Tonacje są zintegrowane pod względem muzycznym,
                posiadając tabele transpozycji co umożliwia ćwiczenie razem
                osobom w różnych kluczach i strojach. Zastosowanie różnych
                ćwiczeń i akompaniamentów muzycznych umożliwia rozwój
                umiejętności u ćwiczących na każdym etapie kształcenia.
                Akompaniament pomaga ćwiczącym utrzymać puls i tempo ćwiczenia,
                a linia melodyczna rozwija słuch muzyczny.
              </p>
              <p className="md:max-w-[700px] text-gray-600 text-center text-xs md:text-sm pt-3 md:pt-4">
                Aplikacja zawiera 1612 podkładów muzycznych w różnych stylach.
                Warunkiem korzystania z aplikacji jest zakupienie książki{" "}
                <span className="font-bold">
                  Gamy i pasaże - nowe spojrzenie
                </span>{" "}
                na stronie wydawnictwa www.cde-music.pl lub w sklepie muzycznym
                w której znajdziesz indywidualny kod do korzystania z aplikacji.
              </p>
            </div>
            <Footer page="home" />
          </section>
        </div>
      </div>
    </div>
  );
}
