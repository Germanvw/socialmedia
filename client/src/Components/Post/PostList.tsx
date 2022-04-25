import { PostItem } from './PostItem';
import './post.scss';

export interface PostProp {
  id: number;
  text: string;
  image: string;
  user: any;
  likes: number;
  comments: number;
}

export const PostList = ({ posts }: PostProp[] | any) => {
  return (
    <div className='post-list'>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map((post: PostProp) => <PostItem key={post.id} feed={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};
