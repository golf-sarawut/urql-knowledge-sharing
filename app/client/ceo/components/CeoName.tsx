"use client";
import { useCeo } from "@/app/repositories/hooks/useCeo";

export function CeoName() {
  const { ceoName } = useCeo();
  return <div>CEO: {ceoName}</div>;
}
