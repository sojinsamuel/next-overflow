import Image from "next/image";
import Link from "next/link";
import React from "react";
import ShowTags from "./ShowTags";

// Dummy Questions
const dummyQuestions = [
  {
    _id: "1",
    title: "How to use Next.js with Tailwind CSS",
  },
  {
    _id: "2",
    title: "How to use Next.js with Tailwind CSS",
  },
  {
    _id: "3",
    title: "How to use Next.js with Tailwind CSS",
  },
  {
    _id: "4",
    title: "How to use Next.js with Tailwind CSS",
  },

  {
    _id: "5",
    title: "How to use Next.js with Tailwind CSS",
  },
];

const dummyTags = [
  {
    _id: "1",
    name: "javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "react",
    totalQuestions: 5,
  },
  {
    _id: "3",
    name: "nextjs",
    totalQuestions: 5,
  },
  {
    _id: "4",
    name: "tailwindcss",
    totalQuestions: 5,
  },
  {
    _id: "5",
    name: "typescript",
    totalQuestions: 5,
  },
];
function RightPanel() {
  return (
    <section className="bg-lt900_dt201 lt-border1 custom-scroll sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-5 pt-[9rem] shadow-light-501 dark:shadow-none max-xl:hidden lg:w-[349px]">
      {/* Questions */}
      <div>
        <h3 className="heading3-bold txt-dt201_lt901">Featured Questions</h3>
        <div className="mt-8 flex w-full flex-col gap-[32px]">
          {dummyQuestions.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-md txt-dt501_lt701">{question.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron right"
                width={19}
                height={19}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* Tags */}
      <div className="mt-14">
        <h3 className="heading3-bold txt-dt201_lt901">Featured Tags</h3>
        <div className="mt-6 flex flex-col gap-3">
          {dummyTags.map((tag) => (
            <ShowTags
              key={tag._id}
              id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RightPanel;
