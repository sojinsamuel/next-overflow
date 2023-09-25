"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SheetClose } from "@/components/ui/sheet";
import { panelReference } from "@/constants/global";

function NavBody() {
  const pathname = usePathname();

  const isItemActive = (itemPath: string) => {
    return (
      (pathname.includes(itemPath) && itemPath.length > 1) ||
      pathname === itemPath
    );
  };

  return (
    <section className="flex h-full flex-col gap-5 pt-14">
      {panelReference.map((item) => {
        return (
          <SheetClose asChild key={item.title}>
            <Link
              href={item.path}
              className={`${
                isItemActive(item.path)
                  ? "rounded-lg bg-[#FF7101] text-black"
                  : "txt-dt301_lt901"
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
                className={`${isItemActive(item.path) ? "base-bd" : "base-md"}`}
              >
                {item.title}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
}

export default NavBody;
