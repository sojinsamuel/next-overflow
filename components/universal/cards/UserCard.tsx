import { getTopInteractedTags } from "@/lib/actions/tag.actions";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import ShowTags from "../panels/ShowTags";

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const interactedTags = await getTopInteractedTags({ userId: user._id });

  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-lt101_dtnone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="bg-lt900_dt201 lt-border1 flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={user.picture}
          alt="user profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />

        <div className="mt-4 text-center">
          <h3 className="heading3-bold txt-dt201_lt901 line-clamp-1">
            {user.name}
          </h3>
          <p className="body-reg txt-dt501_lt501 mt-2">@{user.username}</p>
        </div>

        <div className="mt-5">
          {interactedTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => (
                <ShowTags key={tag._id} _id={tag._id} name={tag.name} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
