import { User } from '@/models/User';
import { Department } from '@/models/Department';

export interface RootState {
    users: User[];
    departments: Department[];
}