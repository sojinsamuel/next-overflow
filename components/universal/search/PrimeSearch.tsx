import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

function PrimeSearch() {
  return (
    <div className="relative w-full max-w-[598px] max-lg:hidden">
      <div className="bg-lt801_dtgradient relative flex min-h-[57px] grow items-center gap-1 rounded-lg px-5">
        <Image
          src="/assets/icons/search.svg"
          className="cursor-pointer "
          width={23}
          height={23}
          alt="search bar"
        />
        <Input
          type="text"
          placeholder="Univeral Search"
          className="para-reg no-focus-outline bg-lt801_dtgradient border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
}

export default PrimeSearch;
