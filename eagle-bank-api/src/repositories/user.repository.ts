import { CreatedUserResponse, FindUserResponse } from "../api-types/users";
import { User } from "../models/user.model";

export class UserRepository {
    private userStore: User[] = [];
    
    createUser(newUser: User): CreatedUserResponse {
        const userWithId = { 
            ...newUser, id: `usr-${this.userStore.length + 1}`, 
            createdTimestamp: new Date().toISOString(), 
            updatedTimestamp: new Date().toISOString() 
        };
        this.userStore.push(userWithId);
        return userWithId as CreatedUserResponse;
    }

    findUserByUserId(userId: string): FindUserResponse | undefined {
        return this.userStore.find(user => user.id === userId) as FindUserResponse | undefined;
    }

    updateUser(userId: string, updatedFields: Partial<Omit<User, "id">>): User | undefined {
        const userIndex = this.userStore.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return undefined;
        }
        const existingUser = this.userStore[userIndex];
        const updatedUser: User = { ...existingUser, ...updatedFields } as User;
        this.userStore[userIndex] = updatedUser;
        return updatedUser;
    }

    deleteUser(userId: string): boolean {
        const userIndex = this.userStore.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return false;
        }
        this.userStore.splice(userIndex, 1);
        return true;
    }
}