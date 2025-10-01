import { User } from '../types/User';
import { client } from '../utils/fetchClient';

export const getUsers = () => {
  return client.get<User[]>(`/users}`);
};

export const getUser = (userId: number) => {
  return client.get<User>(`/users/${userId}`);
};

export const createUser = (data: Omit<User, 'id'>) => {
  return client.post<User>('/users', data);
};

export const deleteUser = (userId: number) => {
  return client.delete(`/users/${userId}`);
};
