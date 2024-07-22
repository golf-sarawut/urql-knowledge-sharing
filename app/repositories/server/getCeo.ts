import { getServerSideClient } from "../spaceXClient";
import { CeoQuery, CeoQueryResult } from "../queries/ceoQuery";


export async function getCeo(){
  const result = await getServerSideClient().query<CeoQueryResult>(CeoQuery, {});
  return { ceoName: result.data?.company.ceo ?? "" };
};
