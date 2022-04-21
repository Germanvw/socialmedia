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

export const userData: UserDataProps = {
  id: 1,
  username: 'johndoe',
  email: 'johndoe@mail.com',
  firstname: 'John',
  lastname: 'Doe',
  image:
    'https://images.generated.photos/8LutRhJcdq0oWwqVu49qRGNXhQEA0EqJyXcLUB_Necc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA5ODgwLmpwZw.jpg',
  age: 30,
  country: { id: 11, name: 'Argentina', code: 'AR' },
  province: 'Buenos Aires',
  gender: { id: 2, name: 'Male' },
  friends: 5,
  active: 1,
};

export const contactList = [
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f2',
    name: 'Julie Mendez',
    username: '@juliemendez',
    adress: 'Memphis, TN, US',
    image:
      'https://images.generated.photos/780_wUZZVCCHDQ6n5EIWr71FaMkposY_RTbKMcUl1J0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkyMTI0LmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f3',
    name: 'Sophie Thunder',
    username: '@sophiethunder',
    adress: 'Newark, NJ, US',
    image:
      'https://images.generated.photos/W1-nFy63WDv1T1w64D7X92rMdeVec1n6gfXtqVsoZU0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzk5NDM1LmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f4',
    name: 'Marian Montgomery',
    username: '@marianmontgomery',
    adress: 'Fort Worth, TX, US',
    image:
      'https://images.generated.photos/u4zBG03bgSJzLzqdQtWIF6VQIZtrUOjCq8Xawo65rCE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk1NTU0LmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f5',
    name: 'Joyce Reid',
    username: '@joycereid',
    adress: 'Springfield, MA, US',
    image:
      'https://images.generated.photos/4scBGwFB5NETNEYy7CTJjsRbJNetTfIyoohr3at0AJA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTMxODgwLmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f6',
    name: 'Domingo Flores',
    username: '@domingoflores',
    adress: 'Honolulu, Hi, US',
    image:
      'https://images.generated.photos/B9gMX4y6MssEHn80Jg8nbpulnydRDPic5yggGWHiF1Y/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjMwMzg2LmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f7',
    name: 'Stephen Stuart',
    username: '@stephenstuart',
    adress: 'Fort Worth, MA, US',
    image:
      'https://images.generated.photos/hArOk6ipGVG1nXeQmCqKQQXHBgwAPU4C-L9m0g-uPrQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzg1NTQ3LmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: '5e9f9f9f9f9f9f9f9f9f9f8',
    name: 'Mike Jhon',
    username: '@mikejhon',
    adress: 'Newark, NJ, US',
    image:
      'https://images.generated.photos/u4zBG03bgSJzLzqdQtWIF6VQIZtrUOjCq8Xawo65rCE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk1NTU0LmpwZw.jpg',
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
];
