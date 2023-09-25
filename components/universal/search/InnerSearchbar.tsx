"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface InnerSearchbarProps {
  targetRoute: string;
  iconAlignment: "left" | "right";
  iconImageSrc: string;
  searchPlaceholder: string;
  additionalClasses?: string;
}

function InnerSearchbar({
  targetRoute,
  iconAlignment,
  iconImageSrc,
  searchPlaceholder,
  additionalClasses,
}: InnerSearchbarProps) {
  return (
    <div
      className={`bg-lt801_dtgradient flex min-h-[55px] grow items-center gap-5 rounded-[12px] px-3 ${additionalClasses}`}
    >
      {iconAlignment === "left" && (
        <Image
          src={iconImageSrc}
          className="cursor-pointer"
          alt="local search"
          width={23}
          height={23}
        />
      )}
      <Input
        className="para-reg no-focus-outline placeholder bg-lt801_dtgradient border-none shadow-none outline-none"
        type="text"
        placeholder={searchPlaceholder}
        value=""
        onChange={() => {}}
      />
      {iconAlignment === "right" && (
        <Image
          src={iconImageSrc}
          className="cursor-pointer"
          alt="local search"
          width={23}
          height={23}
        />
      )}
    </div>
  );
}

export default InnerSearchbar;
