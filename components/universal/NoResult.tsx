import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";

interface NoResultProps {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}

const NoResult = ({ title, description, link, linkTitle }: NoResultProps) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />

      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />

      <h2 className="heading2-bold txt-dt201_lt901 mt-8">{title}</h2>
      <p className="body-reg txt-dt501_lt701 my-3.5 max-w-md text-center">
        {description}
      </p>

      <Link href={link}>
        <Button className="para-md mt-5 min-h-[46px] rounded-lg bg-primary-501 px-4 py-3 text-light-901 hover:bg-primary-501 dark:bg-primary-501 dark:text-light-901">
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
};

export default NoResult;
