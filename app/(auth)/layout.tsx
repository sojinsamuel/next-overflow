import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex-centering min-h-screen ">{children}</main>;
}

export default AuthLayout;
