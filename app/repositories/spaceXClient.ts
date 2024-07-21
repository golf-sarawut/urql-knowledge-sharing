import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import { devtoolsExchange } from '@urql/devtools';
import { registerUrql } from "@urql/next/rsc";

export function getClientSideClient() {
  return createClient({
    url: "https://spacex-production.up.railway.app/",
    exchanges: [devtoolsExchange, cacheExchange, fetchExchange],
  });
}

export function getServerSideClient() {
  const { getClient } = registerUrql(getClientSideClient);
  return getClient();
}
