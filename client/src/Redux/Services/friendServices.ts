import { fetchToken } from '../../Hooks/useFetch';

const fetchFriendRequest = async () => {
  const req = await fetchToken('friend/req', {});
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const fetchFriends = async () => {
  const req = await fetchToken('friend', {});
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const addFriend = async () => {};

const removeFriend = async () => {};

export const friendServices = {
  fetchFriendRequest,
  fetchFriends,
  addFriend,
  removeFriend,
};
