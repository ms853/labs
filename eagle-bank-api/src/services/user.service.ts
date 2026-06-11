import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { AccountRepository } from "../repositories/account.repository";
import { CreateUserRequest, CreatedUserResponse, FindUserForbiddenResponse, FindUserResponse, UserNotFoundResponse } from '../api-types/users';
import { BadRequestError } from "../errors/user.error";
export class UserService {
    private userRepository: UserRepository;
    private accountRepository: AccountRepository;

    constructor() {
        this.userRepository = new UserRepository();
        this.accountRepository = new AccountRepository();
    }


    async createUser(newUser: CreateUserRequest): Promise<CreatedUserResponse> {
        if (!newUser.name || !newUser.address || !newUser.phoneNumber || !newUser.email) {
            throw new BadRequestError("Invalid details supplied");
        }
        return this.userRepository.createUser(newUser as User);
    }

    async fetchUserById(authenticatedUserId: string, requestedUserId: string): Promise<FindUserResponse | FindUserForbiddenResponse | UserNotFoundResponse | undefined> {
        if (authenticatedUserId !== requestedUserId) {
            return { status: 403, message: 'Forbidden' } as FindUserForbiddenResponse;
        }

        const user = this.userRepository.findUserByUserId(requestedUserId);
        if (!user) {
            return { status: 404, message: 'User not found' } as UserNotFoundResponse;
        }

        return user as FindUserResponse;
    }

    async updateUser(userId: string, updatedFields: Partial<Omit<User, "id">>): Promise<User | undefined> {
        return this.userRepository.updateUser(userId, updatedFields);
    }

    async deleteUser(userId: string): Promise<boolean> {
        return this.userRepository.deleteUser(userId);
    }

}