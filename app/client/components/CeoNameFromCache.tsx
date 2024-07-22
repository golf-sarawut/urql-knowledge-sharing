"use client";
import { useCachedCeo } from "@/app/repositories/hooks/useCachedCeo";

export function CeoNameFromCache() {
  const { ceoName } = useCachedCeo();
  return <div>
    CEO Name from cache: {ceoName}
    </div>;
}
