import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.actions";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // const { userId } = auth();

  const userId = "12345ABC";
  if (!userId) redirect("/log-in");

  const mongoUser = await getUserById({ userId });

  console.log(mongoUser);

  return (
    <div>
      <h1 className="heading1-bold txt-dt101_lt901">Propose a question</h1>

      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser.id)} />
      </div>
    </div>
  );
};

export default Page;
