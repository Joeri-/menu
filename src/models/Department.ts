import { User } from '@/models/User';

export interface Department {
    name: string,
    managingUsers: User[]
}