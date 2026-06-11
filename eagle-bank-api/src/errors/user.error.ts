// File to serve as a central location for all user-related error types, making it easier to manage and maintain error handling across the application.

//import { BadRequestCreatedUserResponse, UnexpectedErrorResponse } from '../api-types/users';

export class BadRequestError extends Error { 
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "BadRequestError";
        this.statusCode = 400;
    }
}

export class ForbiddenError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "ForbiddenError";
        this.statusCode = 403;
    }
}

export class NotFoundError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}