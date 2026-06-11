// Made this file to centralize all API related types for better maintainability and readability.
import type { paths } from '../schema/openapi-schema';
// Create user related types
type CreateUserRequest = paths["/v1/users"]["post"]["requestBody"]["content"]["application/json"];
type BadRequestCreatedUserResponse = paths["/v1/users"]["post"]["responses"]["400"]["content"];
type UnexpectedErrorResponse = paths["/v1/users"]["post"]["responses"]["500"]["content"];
type CreatedUserResponse = paths["/v1/users"]["post"]["responses"]["201"]["content"];

type FindUserResponse = paths["/v1/users/{userId}"]["get"]["responses"]["200"]["content"];
type UserNotFoundResponse = paths["/v1/users/{userId}"]["get"]["responses"]["404"]["content"];

type UpdateUserByIDRequest = paths["/v1/users/{userId}"]["patch"]["requestBody"]["content"]["application/json"];
type UpdateUserByIDResponse = paths["/v1/users/{userId}"]["patch"]["responses"]["200"]["content"];
type UpdateUserByIDNotFoundResponse = paths["/v1/users/{userId}"]["patch"]["responses"]["404"]["content"];

type DeleteUserByIDResponse = paths["/v1/users/{userId}"]["delete"]["responses"]["204"];
type DeleteUserByIDNotFoundResponse = paths["/v1/users/{userId}"]["delete"]["responses"]["404"]["content"];

export {
    CreateUserRequest,
    BadRequestCreatedUserResponse,
    UnexpectedErrorResponse,
    CreatedUserResponse,
    FindUserResponse,
    UserNotFoundResponse,
    UpdateUserByIDRequest,
    UpdateUserByIDResponse,
    UpdateUserByIDNotFoundResponse,
    DeleteUserByIDResponse,
    DeleteUserByIDNotFoundResponse
};
