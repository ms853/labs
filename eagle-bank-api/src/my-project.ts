import type { paths } from './schema/openapi-schema';
import OpenAPIFetch, { createPathBasedClient } from 'openapi-fetch';

export const api = OpenAPIFetch<paths>({
  //definition: './src/schema/openapi.yaml',
  baseUrl: 'http://localhost:3000',
});

const client = createPathBasedClient<paths>({
  baseUrl: "https://myapi.dev/v1",
});

export type APIPaths = paths;