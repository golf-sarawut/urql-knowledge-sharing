import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

export function getClientSideClient() {
  return createClient({
    url: "https://spacex-production.up.railway.app/",
    exchanges: [cacheExchange, fetchExchange],
  });
}

export function getServerSideClient() {
  const { getClient } = registerUrql(getClientSideClient);
  return getClient();
}
