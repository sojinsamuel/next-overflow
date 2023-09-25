import Image from "next/image";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import BrandMark from "./BrandMark";
import NavBody from "./NavBody";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function PhoneNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          className="invert-colors sm:hidden"
          width={36}
          height={36}
          alt="hambergur menu"
        />
      </SheetTrigger>
      <SheetContent side="left" className="bg-lt900_dt201 border-none">
        <BrandMark modifyClass={false} />
        <div>
          <SheetClose asChild>
            <NavBody />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-4">
              <SheetClose asChild>
                <Link href="/log-in">
                  <Button className="tiny-md button-secondary min-h-[40px] w-full rounded-lg px-5 py-4 shadow-none">
                    <span className="text-gradient-primary">Log in</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="tiny-md lt-border2 button-tertiary txt-dt401_lt901 min-h-[40px] w-full rounded-lg px-5 py-4 shadow-none">
                    Sign up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default PhoneNav;
