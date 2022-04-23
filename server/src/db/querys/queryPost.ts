const queryGlobalPost: string =
  "SELECT P.id, P.text, P.image,P.likes,P.comments,P.created_at, JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image) as user FROM POST AS P INNER JOIN USER AS U ON P.user = U.id WHERE P.active = 1 ";

export const queryFetchPostsAll: string =
  queryGlobalPost + ' ORDER BY p.created_at DESC';

export const queryFetchPostsByUser: string =
  queryGlobalPost + ' AND P.user = (?) ORDER BY p.created_at DESC';

export const queryFetchPostById: string =
  queryGlobalPost + ' AND P.id = (?) ORDER BY p.created_at DESC';
