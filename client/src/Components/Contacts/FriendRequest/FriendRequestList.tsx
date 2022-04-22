import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useRedux';
import { FriendItemProps } from '../../../Interfaces/UserInterfaces';
import { FriendRequestItem } from './FriendRequestItem';

export interface RequestDataProp {
  id: number;
  state: { state: number; name: 'PENDING' | 'ACCEPTED' | 'DECLINED' };
}

export const FriendRequestList = () => {
  const { friendRequestList } = useAppSelector((state) => state.friend);

  const showAmount = 3;
  return (
    <div className='friend-request-list'>
      <div className='request-title'>
        <p className='header'>
          {friendRequestList.length > 0 ? 'Friend Requests' : 'Friend Request'}
          <span>{friendRequestList ? friendRequestList.length : '0'}</span>
        </p>
      </div>
      {friendRequestList
        .slice(0, showAmount)
        .map(
          (
            {
              user,
              requestData,
            }: { user: FriendItemProps; requestData: RequestDataProp },
            index
          ) => (
            <FriendRequestItem
              user={user}
              requestData={requestData}
              key={index}
            />
          )
        )}
      {friendRequestList.length > showAmount && (
        <Link to='#' className='link-view-all'>
          View All
        </Link>
      )}
    </div>
  );
};
