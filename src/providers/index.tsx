"use client";

import { useState, useEffect } from "react";
import SessionProvider from "./session-provider";
import ToastProvider from "./toast-provider";

type props = {
  readonly children: React.ReactNode;
};

export default function Provider({ children }: props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <SessionProvider>
      {children}
      <ToastProvider />
    </SessionProvider>
  );
}
