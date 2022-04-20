import { UserDataProps } from "./users";

interface PostDataProps {
  text: string;
  image?: string;
  hashtags?: string[];
  likes?: string[];
  comments?: string[];
}

export interface FeedItemProps {
  id: string;
  user: UserDataProps;
  post: PostDataProps;
}

export const feedList: FeedItemProps[] = [
  {
    id: "123",
    user: {
      uid: "5e9f9f9f9f9f9f9f9f9f9f1",
      name: "John Doe",
      username: "@johndoe",
      adress: "Torrance, CA., United States",
      image:
        "https://images.generated.photos/8LutRhJcdq0oWwqVu49qRGNXhQEA0EqJyXcLUB_Necc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjA5ODgwLmpwZw.jpg",
      data: {
        posts: 10,
        followers: 50,
        following: 20,
      },
    },
    post: {
      text: "While Corfu give us the ability to shoot by the sea with amazing blue background full of light of the sky, Florina give us its gentle side. The humble atmosphere and Light of Florina which comes.aa",
      image: "",
      hashtags: ["#hello", "#world"],
      likes: [],
      comments: [],
    },
  },
];
