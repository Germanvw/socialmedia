import { fetchToken } from '../../Hooks/useFetch';

const fetchPostsAll = async () => {
  const req = await fetchToken('posts', {});
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

const fetchPostByUser = async (id: number) => {
  const req = await fetchToken(`posts${id}`, {});
  const answ = await req.json();
  if (answ.ok) {
    return answ;
  } else {
    throw new Error(answ.msg);
  }
};

export const postServices = {
  fetchPostsAll,
  fetchPostByUser,
};
