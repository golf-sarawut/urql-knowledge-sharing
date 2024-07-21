import { gql } from "urql";

export type Company = {
  ceo: string;
};

export type CeoQueryResult = {
  company: Company;
};

export const CeoQuery = gql`
  query {
    company {
      ceo
    }
  }
`;
