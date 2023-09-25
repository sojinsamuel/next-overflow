"use client";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "@/components/ui/button";

const HomeFilters = () => {
  const active = "frequent";

  return (
    <div className="mt-10  hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`body-md rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-501"
              : "bg-light-801 text-light-501"
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
