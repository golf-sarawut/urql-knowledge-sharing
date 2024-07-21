import { useQuery } from "urql";
import { CeoQuery, CeoQueryResult } from "../queries/ceoQuery";

export function useCeo() {
  const [result, reexecuteQuery] = useQuery<CeoQueryResult>({
    query: CeoQuery,
  });

  return {
    ceoName: result.data?.company.ceo ?? "",
    reexecuteQuery,
  };
}
