import { cacheExchange, createClient, fetchExchange } from '@urql/core';
import { registerUrql } from '@urql/next/rsc';

const makeClient = () => {
  return createClient({
    url: 'https://spacex-production.up.railway.app/',
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);