import type { paths } from '../../schema/openapi-schema';

// Account related types
type CreateAccountRequest = paths["/v1/accounts"]["post"]["requestBody"]["content"]["application/json"];
type BadRequestCreateAccountResponse = paths["/v1/accounts"]["post"]["responses"]["400"]["content"]["application/json"];
type CreatedAccountResponse = paths["/v1/accounts"]["post"]["responses"]["201"]["content"]["application/json"];

type ListAccountsResponse = paths["/v1/accounts"]["get"]["responses"]["200"]["content"]["application/json"];
type ListAccountsBadRequestResponse = paths["/v1/accounts"]["get"]["responses"]["401"]["content"]["application/json"];

type FetchAccountByAccountNumberResponse = paths["/v1/accounts/{accountNumber}"]["get"]["responses"]["200"]["content"]["application/json"];
type FetchAccountByAccountNumberBadRequestResponse = paths["/v1/accounts/{accountNumber}"]["get"]["responses"]["400"]["content"]["application/json"];
type FetchAccountByAccountNumberNotFoundResponse = paths["/v1/accounts/{accountNumber}"]["get"]["responses"]["404"]["content"]["application/json"];
export {
    CreateAccountRequest,
    BadRequestCreateAccountResponse,
    CreatedAccountResponse,
    ListAccountsResponse,
    ListAccountsBadRequestResponse,
    FetchAccountByAccountNumberResponse,
    FetchAccountByAccountNumberBadRequestResponse,
    FetchAccountByAccountNumberNotFoundResponse
};