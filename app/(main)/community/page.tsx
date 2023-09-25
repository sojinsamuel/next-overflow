import UserCard from "@/components/universal/cards/UserCard";
import Filter from "@/components/universal/Filter";
import PrimeSearch from "@/components/universal/search/PrimeSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/user.actions";
import Link from "next/link";

const Page = async () => {
  const result = await getAllUsers({});

  return (
    <>
      <h1 className="heading1-bold txt-dt101_lt901">All Users</h1>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <PrimeSearch
          route="/community"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for amazing minds"
          otherClasses="flex-1"
        />

        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
        />
      </div>

      <section className="mt-12 flex flex-wrap gap-4">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
          <div className="para-reg txt-dt201_lt801 mx-auto max-w-4xl text-center">
            <p>No users yet</p>
            <Link href="/sign-up" className="mt-2 font-bold text-accent-cyan">
              Join to be the first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Page;
