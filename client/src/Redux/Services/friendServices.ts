import { fetchToken } from '../../Hooks/useFetch';

const fetchFriendRequest = async () => {
  const req = await fetchToken('friend/req', {});
  const answ = await req.json();
  console.log(answ);
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
const friendRequestResponse = async (resp: {
  id: number;
  response: number;
}) => {
  const { id, response } = resp;
  const req = await fetchToken(`friend/req/${id}`, { response }, 'PUT');
  const answ = await req.json();
  if (answ.ok) {
    console.log(answ);
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const addFriend = async (user2: number) => {
  const req = await fetchToken('friend', { user2 }, 'POST');
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const removeFriend = async (user2: number) => {
  const req = await fetchToken('friend', { user2 }, 'PUT');
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

export const friendServices = {
  fetchFriendRequest,
  fetchFriends,
  addFriend,
  removeFriend,
  friendRequestResponse,
};
