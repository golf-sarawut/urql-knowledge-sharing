"use client"
import { useQuery } from "urql";
import { CeoQuery, CeoQueryResult } from "../queries/ceoQuery";

export function useCachedCeo() {
  const [result, reexecuteQuery] = useQuery<CeoQueryResult>({
    query: CeoQuery,
    requestPolicy: "cache-only",
  });

  return {
    ceoName: result.data?.company.ceo ?? "",
    reexecuteQuery,
  };
}
