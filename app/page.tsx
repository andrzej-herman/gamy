"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

const font = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["600"],
});

export default function Home() {
  const router = useRouter();

  const enterMainPage = () => {
    router.push("/main");
  };

  return (
    <main className="h-full bg-yellow-100">
      <div className="container mx-auto h-full">
        <div className="h-full min-h-max flex flex-col items-center justify-center">
          <section className="h-full min-h-max flex flex-col items-center justify-center">
            <div className="space-y-6 text-center pb-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Image
                    src="/cde-logo.png"
                    alt="Music Cde Logo"
                    width={200}
                    height={110}
                    className="mb-12"
                  />
                </div>
                <h1
                  className={cn(
                    "text-6xl font-semibold text-[#f2b80f] drop-shadow-md",
                    font.className,
                  )}
                >
                  Gamy i pasaże
                </h1>
              </div>
              <p className="text-neutral-800 text-lg font-semibold">
                Podkłady muzyczne do książki "Gamy i pasaże - nowe spojrzenie"
                <br />
                wydawnictwa CDE-Music
              </p>
              <div className="flex items-center justify-center gap-x-7">
                <Button
                  variant="scales"
                  size="default"
                  className="text-base"
                  onClick={enterMainPage}
                >
                  Zaloguj się
                </Button>
                <Button variant="scales" size="default" className="text-base">
                  Utwórz konto Użytkownika
                </Button>
              </div>
            </div>
            <p className="max-w-[700px] text-center text-sm">
              Aplikacja z podkładami muzycznymi do książki "Gamy i pasaże - nowe
              spojrzenie" wydawnictwa <br />
              CDE-Music . Książka skierowana jest do osób ćwiczących
              indywidualnie jak i grupowo, o różnym zaawansowaniu muzycznym,
              uczniów różnych form kształcenia muzycznego po zespoły
              instrumentalne zawierając ćwiczenia we wszystkich tonacjach, gam
              durowych, molowych oraz chromatycznych. <br />
              <br />
              Innowacją książki jest możliwość realizacji danego ćwiczenia przez
              wszystkie tonacje, jak i ćwiczenie w ramach jednej tonacji.
              Tonacje są zintegrowane pod względem muzycznym, posiadając tabele
              transpozycji co umożliwia ćwiczenie razem osobom w różnych
              kluczach i strojach. Zastosowanie różnych ćwiczeń i
              akompaniamentów muzycznych umożliwia rozwój umiejętności u
              ćwiczących na każdym etapie kształcenia. Akompaniament pomaga
              ćwiczącym utrzymać puls i tempo ćwiczenia, a linia melodyczna
              rozwija słuch muzyczny. <br />
              <br />
              Aplikacja zawiera 1612 podkładów muzycznych w różnych stylach.
              Warunkiem korzystania z aplikacji jest zakupienie książki Gamy i
              pasaże na stronie wydawnictwa www.cde-music.pl lub w sklepie
              muzycznym w której znajdziesz indywidualny kod do korzystania z
              aplikacji.
            </p>
            <div className="mt-12">
              <p className="max-w-[700px] text-center text-xs">
                Autor książki - Antoni Janaszewski
                <br />
                Opracowanie akompaniamentów i realizacja nagrań - Karol Kozan
                <br />
                Realizacja aplikacji - Andrzej Herman, Piotr Goetzen
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
