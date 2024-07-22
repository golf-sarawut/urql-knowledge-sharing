"use client"
import { useQuery } from "urql";
import { CeoQuery, CeoQueryResult } from "../queries/ceoQuery";

export function useCeoManual() {
  const [result, reexecuteQuery] = useQuery<CeoQueryResult>({
    query: CeoQuery,
    pause: true,
  });

  return {
    ceoName: result.data?.company.ceo ?? "",
    query: reexecuteQuery,
    isFetched: !result.fetching,
  };
}
