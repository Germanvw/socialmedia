import { FeedItem } from './FeedItem';
import './feed.scss';

export interface PostProp {
  id: number;
  text: string;
  image: string;
  user: any;
  likes: number;
  comments: number;
}

export const FeedList = ({ posts }: PostProp[] | any) => {
  return (
    <div className='feed-list'>
      <h1>Feeds</h1>
      {posts.length > 0 ? (
        posts.map((post: PostProp) => {
          return <FeedItem key={post.id} feed={post} />;
        })
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
};
