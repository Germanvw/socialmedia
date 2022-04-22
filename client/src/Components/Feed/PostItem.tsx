import { FeedItem } from './FeedItem';

export const PostItem = ({ post }: any) => {
  return (
    <div>
      <FeedItem feed={post} />
      <div>Comments...</div>
    </div>
  );
};
