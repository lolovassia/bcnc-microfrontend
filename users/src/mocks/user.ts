import { User } from '@/types/users';

export const EMPTY_USER: User = {
  id: 0,
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
  address: undefined,
  company: undefined,
};

export const MOCK_USERS = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
];
