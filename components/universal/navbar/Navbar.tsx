"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";

import ThemeChanger from "./ThemeChanger";
import PhoneNav from "./PhoneNav";
import BrandMark from "./BrandMark";
import PrimeSearch from "../search/PrimeSearch";

function Navbar() {
  return (
    <nav className="flex-space-between bg-lt900_dt201 fixed z-40 w-full gap-6 p-5 shadow-light-401 dark:shadow-none sm:px-14">
      <BrandMark />
      <PrimeSearch />
      <div className=" flex-space-between gap-4">
        <ThemeChanger />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
              variables: {
                colorPrimary: "#ff7101",
              },
            }}
          />
        </SignedIn>
        <PhoneNav />
      </div>
    </nav>
  );
}

export default Navbar;
