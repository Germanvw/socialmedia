const queryGlobalPost: string =
  "SELECT P.id, P.text, P.image,P.likes,P.comments,P.created_at, JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image) as user FROM POST AS P INNER JOIN USER AS U ON P.user = U.id WHERE P.active = 1 ";

export const queryFetchPostsAll: string =
  queryGlobalPost + ' ORDER BY p.created_at DESC';

export const queryFetchPostsByUser: string =
  queryGlobalPost + ' AND P.user = (?) ORDER BY p.created_at DESC';

export const queryFetchPostById: string = queryGlobalPost + ' AND P.id = (?)';

export const queryCreatePost: string =
  'INSERT INTO POST (text,image,user) VALUES (?,?,?)';

export const queryDeletePost: string =
  'UPDATE POST SET active = 0 WHERE id=(?) AND user=(?)';

export const queryLastInsertId: string = 'SELECT LAST_INSERT_ID() AS id';
