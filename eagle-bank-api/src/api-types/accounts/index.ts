import type { paths } from '../../schema/openapi-schema';

// Account related types
type CreateAccountRequest = paths["/v1/accounts"]["post"]["requestBody"]["content"]["application/json"];
type BadRequestCreateAccountResponse = paths["/v1/accounts"]["post"]["responses"]["400"]["content"]["application/json"];
type CreatedAccountResponse = paths["/v1/accounts"]["post"]["responses"]["201"]["content"]["application/json"];

export {
    CreateAccountRequest,
    BadRequestCreateAccountResponse,
    CreatedAccountResponse
};