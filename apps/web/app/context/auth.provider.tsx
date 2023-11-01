"use client";

import { SessionProvider, type SessionProviderProps } from "next-auth/react";

export default function Provider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: SessionProviderProps["session"];
}): JSX.Element {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
