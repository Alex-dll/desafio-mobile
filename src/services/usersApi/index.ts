import type { NamePhotoTypes } from '../../constants/photos';
import { api } from '../api';

export type User = {
  id: number;
  photo: NamePhotoTypes;
  name: string;
  office: string;
  admissionDate: string;
  phoneNumber: number;
};

export type Users = Array<User>;

export async function getUsers(): Promise<Users> {
  const response = await api.get<Users>('/users');
  const { data } = response;
  return data;
}
