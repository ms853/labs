import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
import { AccountRepository } from "../repositories/account.repository";

export class UserService {
    private userRepository: UserRepository;
    private accountRepository: AccountRepository;
    
    constructor() {
        this.userRepository = new UserRepository();
        this.accountRepository = new AccountRepository();
    }


    createUser(newUser: Omit<User, "id">): User {
        return this.userRepository.createUser(newUser as User);
    }

    fetchUserById(userId: string): User | undefined {
        return this.userRepository.findUserByUserId(userId);
    }

    updateUser(userId: string, updatedFields: Partial<Omit<User, "id">>): User | undefined {
        return this.userRepository.updateUser(userId, updatedFields);
    }

    deleteUser(userId: string): boolean {
        return this.userRepository.deleteUser(userId);
    }

}