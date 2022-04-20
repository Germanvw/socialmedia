import { feedList } from "../../constants/feeds";
import "./feed.scss";
import { FeedItem } from "./FeedItem";

export const FeedList = () => {
  return (
    <div className="feed-list">
      <h1>Feeds</h1>
      {feedList.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
    </div>
  );
};
