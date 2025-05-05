"use client";

import { useState, useEffect } from "react";
import NextAuthProvider from "./session-provider";
import ReactQueryProvider from "./react-query-provider";

type props = {
  children: React.ReactNode;
};

export default function Provider({ children }: props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <NextAuthProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextAuthProvider>
  );
}
