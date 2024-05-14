"use client";

import React from "react";

interface FooterProps {
  page: string;
}

export default function Footer({ page }: FooterProps) {
  return page === "main" ? (
    <div className="mt-2 mb-6 md:mb-0">
      <p className="md:hidden text-gray-600 text-center text-[10px]">
        Autor książki - Antoni Janaszewski
        <br />
        Opracowanie akompaniamentów - Karol Kozan
        <br />
        Realizacja nagrań - Karol Kozan
        <br />
        Realizacja aplikacji - Andrzej Herman, Piotr Goetzen
      </p>
      <p className="hidden md:block text-gray-600 text-center text-[11px]">
        Autor książki - Antoni Janaszewski
        <br />
        Opracowanie akompaniamentów i realizacja nagrań - Karol Kozan
        <br />
        Realizacja aplikacji - Andrzej Herman, Piotr Goetzen
      </p>
    </div>
  ) : (
    <div className="mt-8 md:mt-12 mb-2 md:mb-0">
      <p className="md:max-w-[700px] text-gray-600 text-center text-[10px] md:text-sm font-bold">
        Autor książki - Antoni Janaszewski
        <br />
        Opracowanie akompaniamentów - Karol Kozan
        <br />
        Realizacja nagrań - Karol Kozan
        <br />
        Realizacja aplikacji - Andrzej Herman, Piotr Goetzen
      </p>
    </div>
  );
}
