"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

interface FiltersProps {
  filters: {
    name: string;
    value: string;
  }[];
  additionalClasses?: string;
  wrapperClasses?: string;
}

function Filter({ filters, additionalClasses, wrapperClasses }: FiltersProps) {
  return (
    <div className={`relative ${wrapperClasses}`}>
      <Select>
        <SelectTrigger
          className={`${additionalClasses} body-reg lt-border1 bg-lt801_dt301 txt-dt501_lt701 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Toggle a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Filter;
