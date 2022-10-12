import type { NamePhotoTypes } from '../../constants/photos';

export type UserCardTypes = {
  id: number;
  photo: NamePhotoTypes;
  name: string;
  office: string;
  admissionDate: string;
  phoneNumber: number | string;
};

export type UserCardProps = {
  users: Array<UserCardTypes>;
};
