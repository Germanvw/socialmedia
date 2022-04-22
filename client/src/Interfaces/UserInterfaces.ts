export interface UserPropRoute {
  user: UserDataProps | null;
}

interface CountryProps {
  id: number;
  name: string;
  code: string;
  active: number | ActiveProps;
}

interface GenderProps {
  id: 1 | 2;
  name: 'Female' | 'Male';
  active: number | ActiveProps;
}

interface ActiveProps {
  id: 0 | 1;
  name: 'INACTIVE' | 'ACTIVE';
}

interface MetaDataProps {
  likes: number;
  posts: number;
  friends: number;
}

export interface FriendItemProps {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  image: string;
  age: number;
  province: string;
  metaData: MetaDataProps;
  country: CountryProps;
  gender: GenderProps;
}

export interface UserDataProps {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  image: string;
  age: number;
  province: string;
  metaData: MetaDataProps;
  country: CountryProps;
  gender: GenderProps;
  active: ActiveProps;
}

export interface FriendItemProps extends Omit<UserDataProps, 'active'> {}

export interface RegisterUser {
  username: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  age: number;
  province: string;
  country: number;
  gender: number;
}