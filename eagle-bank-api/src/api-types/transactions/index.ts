import type { paths } from '../../schema/openapi-schema';

type CreateTransactionRequest = paths["/v1/accounts/{accountNumber}/transactions"]["post"]["requestBody"]["content"]["application/json"];
type BadRequestCreateTransactionResponse = paths["/v1/accounts/{accountNumber}/transactions"]["post"]["responses"]["400"]["content"]["application/json"];
type CreatedTransactionResponse = paths["/v1/accounts/{accountNumber}/transactions"]["post"]["responses"]["201"]["content"]["application/json"];

export {
    CreateTransactionRequest,
    BadRequestCreateTransactionResponse,
    CreatedTransactionResponse
};