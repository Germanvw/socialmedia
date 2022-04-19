interface SocialDataProps {
  posts: number;
  followers: number;
  following: number;
}

export interface UserDataProps {
  uid: string;
  name: string;
  adress: string;
  image: string;
  data: SocialDataProps;
}

export const userData: UserDataProps = {
  uid: "5e9f9f9f9f9f9f9f9f9f9f1",
  name: "John Doe",
  adress: "Torrance, CA., United States",
  image:
    "https://images.generated.photos/8LutRhJcdq0oWwqVu49qRGNXhQEA0EqJyXcLUB_Necc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA5ODgwLmpwZw.jpg",
  data: {
    posts: 10,
    followers: 50,
    following: 20,
  },
};

export const contactList = [
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f2",
    name: "Julie Mendez",
    adress: "Memphis, TN, US",
    image:
      "https://images.generated.photos/780_wUZZVCCHDQ6n5EIWr71FaMkposY_RTbKMcUl1J0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDkyMTI0LmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f3",
    name: "Julie Mendez",
    adress: "Newark, NJ, US",
    image:
      "https://images.generated.photos/W1-nFy63WDv1T1w64D7X92rMdeVec1n6gfXtqVsoZU0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzk5NDM1LmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f4",
    name: "Marian Montgomery",
    adress: "Fort Worth, TX, US",
    image:
      "https://images.generated.photos/u4zBG03bgSJzLzqdQtWIF6VQIZtrUOjCq8Xawo65rCE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk1NTU0LmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f5",
    name: "Joyce Reid",
    adress: "Springfield, MA, US",
    image:
      "https://images.generated.photos/4scBGwFB5NETNEYy7CTJjsRbJNetTfIyoohr3at0AJA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTMxODgwLmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f6",
    name: "Domingo Flores",
    adress: "Honolulu, Hi, US",
    image:
      "https://images.generated.photos/B9gMX4y6MssEHn80Jg8nbpulnydRDPic5yggGWHiF1Y/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjMwMzg2LmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f7",
    name: "Stephen Stuart",
    adress: "Fort Worth, MA, US",
    image:
      "https://images.generated.photos/hArOk6ipGVG1nXeQmCqKQQXHBgwAPU4C-L9m0g-uPrQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mzg1NTQ3LmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
  {
    uid: "5e9f9f9f9f9f9f9f9f9f9f8",
    name: "Mike Jhon",
    adress: "Newark, NJ, US",
    image:
      "https://images.generated.photos/u4zBG03bgSJzLzqdQtWIF6VQIZtrUOjCq8Xawo65rCE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk1NTU0LmpwZw.jpg",
    data: {
      posts: 10,
      followers: 50,
      following: 20,
    },
  },
];
