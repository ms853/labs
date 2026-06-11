import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    private userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }


    createUser(newUser: Omit<User, "id">): User {
        return this.userRepository.createUser(newUser as User);
    }
       
}