"use client";

import { useCeoManual } from "@/app/repositories/hooks/useCeoManual";
import { useUpdateCeoCache } from "@/app/repositories/hooks/useUpdateCeoCache";
import { use, useEffect } from "react";

export default function CEOClient() {
  const { getCeoByCache, getCeoByNetwork } = useUpdateCeoCache();
  const { query, ceoName } = useCeoManual();

  useEffect(() => {
    if(ceoName){
      console.log("ceoName from manual query =", ceoName);
    }
  }, [ceoName]);

  const handleGetCeoByCache = async () => {
    try {
      const result = await getCeoByCache();
      console.log("CEO from cache:", result);
    } catch (error) {
      console.error("Error getting CEO from cache:", error);
    }
  };

  const handleGetCeoByNetwork = async () => {
    try {
      const result = await getCeoByNetwork();
      console.log("CEO from network:", result);
    } catch (error) {
      console.error("Error getting CEO from network:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 gap-4">
      <button
        onClick={handleGetCeoByCache}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Get CEO by Cache
      </button>
      <button
        onClick={handleGetCeoByNetwork}
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Get CEO by Network
      </button>
      <button
        onClick={query}
        className="px-4 py-2 mb-4 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Get CEO by Manual query
      </button>
    </main>
  );
}
