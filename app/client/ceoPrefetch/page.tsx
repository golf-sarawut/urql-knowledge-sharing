"use client"
import { useCeo } from "@/app/repositories/hooks/useCeo";
import { CeoNameFromCache } from "../components/CeoNameFromCache";

export default function CEOPrefetch() {
  const { isFetched } = useCeo();

  if (!isFetched) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <CeoNameFromCache />
      <CeoNameFromCache />
      <CeoNameFromCache />
    </main>
  );
}
