/* For purpose of this exercise I will use an in-memory array to store users. */

import { User } from "../models/user.model";
import type { paths } from '../schema/openapi-schema';

const users: User[] = [];
type CreateUserRequest = paths["/v1/users"]["post"]["requestBody"]["content"]["application/json"];
type BadRequestResponse = paths["/v1/users"]["post"]["responses"]["400"]["content"];
type CreatedResponse = paths["/v1/users"]["post"]["responses"]["201"]["content"];

type ResponseType = {
    status: (code: number) => {
        send: (msg: BadRequestResponse | CreatedResponse) => void;
    };
};

export default class UserController {

    static validateCreateUserRequest(req: { body: CreateUserRequest }, res: ResponseType): boolean {
        const { name, address, phoneNumber, email } = req.body;
        const missingFields: string[] = [];
       
        
        if (!name) {
            missingFields.push("name");
        }
        if (!address) {
            missingFields.push("address");
        }
        if (!phoneNumber) {
            missingFields.push("phoneNumber");
        }
        if (!email) {
            missingFields.push("email");
        }
        if (missingFields.length > 0) {
            res.status(400).send({
                error: "Bad Request",
                message: `Missing required fields: ${missingFields.join(", ")}`
             } as unknown as BadRequestResponse);
            return false;
        }

        return true;
    }

    static createUser(req: { body: CreateUserRequest }, res: ResponseType) {
        const { name, address, phoneNumber, email } = req.body;

        if (!UserController.validateCreateUserRequest(req, res)) {
            return;
        }

        if (users.some(user => user.email === email)) {
            return res.status(400).send({
                error: "Bad Request",
                message: "Email already exists"
             } as unknown as BadRequestResponse 
            );
        }

        // Create new user
        const newUser: User = { id: `User0${users.length + 1}`, name, address, phoneNumber, email };
        users.push(newUser);

        res.status(201).send({
            message: "User created successfully",
            user: newUser
        } as unknown as CreatedResponse);
    }
}


