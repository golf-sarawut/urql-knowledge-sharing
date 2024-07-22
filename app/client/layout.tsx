"use client";
import { Provider } from "urql";
import { getClientSideClient } from "../repositories/spaceXClient";
import { useMemo } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = useMemo(() => getClientSideClient(), []);
  return <Provider value={client}>{children}</Provider>;
}
