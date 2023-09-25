import React from "react";

import Navbar from "@/components/universal/navbar/Navbar";
import LeftPanel from "@/components/universal/panels/LeftPanel";
import RightPanel from "@/components/universal/panels/RightPanel";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-lt850_dt100 relative">
      <Navbar />
      <div className="flex">
        <LeftPanel />
        <section className="flex min-h-screen flex-1 flex-col px-7 pb-7 pt-40 max-md:pb-16 sm:px-12 ">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightPanel />
      </div>
    </main>
  );
}

export default MainLayout;
