"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { panelReference } from "@/constants/global";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

function LeftPanel() {
  const pathname = usePathname();

  const isItemActive = (itemPath: string) => {
    return (
      (pathname.includes(itemPath) && itemPath.length > 1) ||
      pathname === itemPath
    );
  };

  return (
    <div className="bg-lt900_dt201 lt-border1 custom-scroll sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-5 pt-[9rem] shadow-light-501 dark:shadow-none max-sm:hidden lg:w-[265px]">
      <div className="flex flex-1 flex-col gap-5">
        {panelReference.map((item) => {
          return (
            <Link
              key={item.title}
              href={item.path}
              className={`${
                isItemActive(item.path)
                  ? "primary-gradient rounded-lg text-light-901 "
                  : "txt-dt301_lt901 text-white"
              } flex items-center justify-start gap-4 bg-transparent p-5`}
            >
              <Image
                src={item.icon}
                className={`${isItemActive(item.path) ? "" : "invert-colors"}`}
                height={21}
                width={21}
                alt={item.title}
              />
              <p
                className={`${
                  isItemActive(item.path) ? "base-bd " : "base-md "
                } max-lg:hidden`}
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-4">
          <Link href="/log-in">
            <Button className="tiny-md button-secondary min-h-[40px] w-full rounded-lg px-5 py-4 shadow-none">
              <Image
                width={19}
                height={19}
                src="/assets/icons/account.svg"
                alt="sign in or login"
                className="invert-colors lg:hidden"
              />
              <span className="text-gradient-primary max-lg:hidden">
                Log in
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="tiny-md lt-border2 button-tertiary txt-dt401_lt901 min-h-[40px] w-full rounded-lg px-5 py-4 shadow-none">
              <Image
                width={19}
                height={19}
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
}

export default LeftPanel;
