"use client";

import React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import Footer from "@/components/footer";
import Header from "@/components/header";
import NotAuth from "@/components/not-auth";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Books() {
  const router = useRouter();
  const { isLoaded, isSignedIn, user } = useUser();

  if (isLoaded && !isSignedIn) {
    router.push("/");
  }

  if (!isLoaded) {
    return <NotAuth />;
  }

  const openEsPage = () => {
    router.push("/espage");
  };

  const openFPage = () => {
    router.push("/fpage");
  };

  const openBPage = () => {
    router.push("/bpage");
  };

  const backToInstruments = () => {
    router.push("/choice");
  };

  return (
    <div className="md:h-screen">
      <div className="container mx-auto flex flex-col h-full items-center justify-center">
        <Header user={user} />
        <div className="mt-5 bg-white p-3 w-full md:w-[940px] text-center text-lg font-bold text-gray-600 rounded-xl">
          Wybierz książkę
        </div>
        <div className="mt-5 flex items-center justify-between gap-5">
          <div
            className="group bg-white hover:bg-yellow-200 w-full md:w-[300px] md:h-[506px] text-center text-sm font-bold rounded-xl cursor-pointer"
            onClick={openEsPage}
          >
            <div className="px-5 w-full h-[100px] flex items-center justify-center">
              Gamy i pasaże kornet, alt, waltornia, tuba w kluczu wiolinowym w
              stroju &bdquo;Es&rdquo;
            </div>
            <Image
              className="opacity-75 group-hover:opacity-100"
              src="/book_01_es.jpg"
              alt="Book One Logo"
              width={300}
              height={406}
            />
          </div>
          <div
            className="group bg-white hover:bg-yellow-200 w-full md:w-[300px] md:h-[506px] text-center text-sm font-bold rounded-xl cursor-pointer"
            onClick={openFPage}
          >
            <div className="px-5 w-full h-[100px] flex items-center justify-center">
              Gamy i pasaże na waltornię w stroju &bdquo;F&rdquo;
            </div>
            <Image
              className="opacity-75 group-hover:opacity-100"
              src="/book_02_f.jpg"
              alt="Book Two Logo"
              width={300}
              height={406}
            />
          </div>
          <div
            className="group bg-white hover:bg-yellow-200 w-full md:w-[300px] md:h-[506px] text-center text-sm font-bold rounded-xl cursor-pointer"
            onClick={openBPage}
          >
            <div className="px-5 w-full h-[100px] flex items-center justify-center">
              Gamy i pasaże na trąbkę, kornet, eufonium, puzon, tuba w kluczu
              wiolinowym w stroju &bdquo;B&rdquo;
            </div>
            <Image
              className="opacity-75 group-hover:opacity-100"
              src="/book_03_b.jpg"
              alt="Book Three Logo"
              width={300}
              height={406}
            />
          </div>
        </div>
        <Button
          variant="scales"
          className="mt-5 w-[940px] mb-3"
          onClick={backToInstruments}
        >
          Powrót do wyboru instrumentów
        </Button>
        <Footer page="main" />
      </div>
    </div>
  );
}
