import Link from "next/link";

import { Badge } from "@/components/ui/badge";

interface ShowTagsProps {
  _id: string; // Change this to number when using real data
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

function ShowTags({ _id, name, totalQuestions, showCount }: ShowTagsProps) {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-md bg-lt801_dt301 txt-lt401_lt501 rounded-lg border-none px-5 py-3 uppercase">
        {name}
      </Badge>
      {showCount && <p className="tiny-md txt-dt501_lt701">{totalQuestions}</p>}
    </Link>
  );
}

export default ShowTags;
