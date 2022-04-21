import { UserDataProps } from './UserInterfaces';

interface PostCommentProps {
  id: number;
  post_id: number;
  user_id: number;
  comment: string;
}

interface PostLikeProps {
  id: number;
  post_id: number;
  user_id: number;
}

export interface PostProps {
  id: number;
  text: string;
  image?: string;
  comments: PostCommentProps[];
  likes: PostLikeProps[];
  user: UserDataProps;
}
