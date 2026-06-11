// Made this file to centralize all API related types for better maintainability and readability.
import type { paths } from '../../schema/openapi-schema';
// Create user related types
type CreateUserRequest = paths["/v1/users"]["post"]["requestBody"]["content"]["application/json"];
type BadRequestCreatedUserResponse = paths["/v1/users"]["post"]["responses"]["400"]["content"];
type UnexpectedErrorResponse = paths["/v1/users"]["post"]["responses"]["500"]["content"];
type CreatedUserResponse = paths["/v1/users"]["post"]["responses"]["201"]["content"]["application/json"];

type FindUserResponse = paths["/v1/users/{userId}"]["get"]["responses"]["200"]["content"]["application/json"];
type FindUserForbiddenResponse = paths["/v1/users/{userId}"]["get"]["responses"]["403"]["content"]["application/json"];
type UserNotFoundResponse = paths["/v1/users/{userId}"]["get"]["responses"]["404"]["content"]["application/json"];

type UpdateUserByIDRequest = paths["/v1/users/{userId}"]["patch"]["requestBody"]["content"]["application/json"];
type UpdateUserByIDResponse = paths["/v1/users/{userId}"]["patch"]["responses"]["200"]["content"]["application/json"];
type UpdateUserByIDForbiddenResponse = paths["/v1/users/{userId}"]["patch"]["responses"]["403"]["content"]["application/json"];
type UpdateUserByIDNotFoundResponse = paths["/v1/users/{userId}"]["patch"]["responses"]["404"]["content"]["application/json"];

type DeleteUserByIDResponse = paths["/v1/users/{userId}"]["delete"]["responses"]["204"]["content"];
type DeleteUserByIDNotFoundResponse = paths["/v1/users/{userId}"]["delete"]["responses"]["404"]["content"]["application/json"];
type DeleteUserByIDForbiddenResponse = paths["/v1/users/{userId}"]["delete"]["responses"]["403"]["content"]["application/json"];
type DeleteUserByIDAssociatedAccountsResponse = paths["/v1/users/{userId}"]["delete"]["responses"]["409"]["content"]["application/json"];

export {
    CreateUserRequest,
    BadRequestCreatedUserResponse,
    UnexpectedErrorResponse,
    CreatedUserResponse,
    FindUserResponse,
    FindUserForbiddenResponse,
    UserNotFoundResponse,
    UpdateUserByIDRequest,
    UpdateUserByIDResponse,
    UpdateUserByIDForbiddenResponse,
    UpdateUserByIDNotFoundResponse,
    DeleteUserByIDResponse,
    DeleteUserByIDNotFoundResponse,
    DeleteUserByIDForbiddenResponse,
    DeleteUserByIDAssociatedAccountsResponse
};
