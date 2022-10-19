import { Injectable } from '@nestjs/common';

export type User = {
    id: string;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: '1',
            name: 'Estevam',
            username: 'estevampg',
            password: '123456',
        },
        {
            id: '2',
            name: 'Bia',
            username: 'biag',
            password: '123456',
        },
    ]

    async findOne(username: string): Promise<User | undefined> {
         return this.users.find(user => user.username === username);
    }
}
 