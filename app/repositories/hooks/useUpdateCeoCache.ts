import { useClient } from "urql";
import { CeoQuery, CeoQueryResult } from "../queries/ceoQuery";

export function useUpdateCeoCache() {
  const client = useClient();

  const getCeoByNetwork = async () => {
    const data = await  client.query<CeoQueryResult>(CeoQuery, {
        requestPolicy: "network-only",
    }).toPromise();

    const ceo = data.data?.company.ceo ?? "";
    return ceo
  };

  const getCeoByCache = () => {
    const ceo = client.readQuery<CeoQueryResult>(CeoQuery, {
      requestPolicy: "cache-only",
    });
    return ceo;
  };

  return {
    getCeoByNetwork,
    getCeoByCache,
  };
}
