"use client";
import { Provider } from "urql";
import { getClientSideClient } from "../repositories/spaceXClient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = getClientSideClient();
  return <Provider value={client}>{children}</Provider>;
}
