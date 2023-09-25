import Link from "next/link";

import { Button } from "@/components/ui/button";
import Filter from "@/components/universal/search/Filter";
import InnerSearchbar from "@/components/universal/search/InnerSearchbar";
import { HomePageFilters } from "@/constants/filters";
import HomeFilterOptions from "@/components/universal/search/home/HomeFilterOptions";
import QuestionCard from "@/components/universal/cards/QuestionCard";
import NoResult from "@/components/universal/NoResult";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
  const result = await getQuestions({});
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="heading1-bold txt-dt101_lt901">All Questions</h1>

        <Link
          href="/propose-question"
          className="flex justify-end max-sm:w-full"
        >
          <Button className="primary-gradient min-h-[45px] px-4 py-3 !text-light-901">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <InnerSearchbar
          targetRoute="/"
          iconAlignment="left"
          iconImageSrc="/assets/icons/search.svg"
          searchPlaceholder="Search for questions"
          additionalClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          additionalClasses="min-h-[56px] sm:min-w-[170px]"
          wrapperClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilterOptions />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
