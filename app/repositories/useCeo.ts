import { gql } from "urql";
import { getClient } from "./spaceXClient";

type Company = {
  ceo: string;
};

type CeoQueryResult = {
  company: Company;
};

const CeoQuery = gql`
  query {
    company {
      ceo
    }
  }
`;

export async function getCeo(){
  const result = await getClient().query<CeoQueryResult>(CeoQuery, {});
  return { ceoName: result.data?.company.ceo ?? "" };
};
