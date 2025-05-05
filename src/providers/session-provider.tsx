"use client";

import { SessionProvider } from "next-auth/react";

type propType = { children: React.ReactNode };

export default function NextAuthProvider({ children }: propType) {
  return <SessionProvider>{children}</SessionProvider>;
}
