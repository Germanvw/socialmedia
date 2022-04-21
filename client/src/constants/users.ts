interface CountryProps {
  id: number;
  name: string;
  code: string;
}

interface GenderProps {
  id: number;
  name: string;
}

export interface UserDataProps {
  id: number;
  username: string;
  email: string;
  firstname: string;
  lastname: string;
  image: string;
  age: number;
  country: CountryProps;
  province: string;
  gender: GenderProps;
  friends: number;
  active: number;
}
