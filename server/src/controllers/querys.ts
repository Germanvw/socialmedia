export const queryFetchUserAllWithoutPassword: string =
  "SELECT U.id, U.username, U.email, U.firstname, U.lastname,U.image,U.age,U.province, JSON_OBJECT('posts',U.posts,'likes',U.likes,'friends',U.friends) as metaData, JSON_OBJECT('id',C.id,'name',C.name,'code',C.code) AS country, JSON_OBJECT('id',G.id,'name',G.name) AS gender, JSON_OBJECT('id',ACT.id,'name',ACT.name) AS active FROM USER AS U INNER JOIN COUNTRY AS C ON C.id=U.country INNER JOIN GENDER AS G ON G.id=U.gender INNER JOIN active as ACT ON ACT.id=U.active WHERE U.ACTIVE = 1";

export const queryFetchUserAllWithPassword =
  "SELECT U.id, U.username, U.email, U.password,U.firstname, U.lastname,U.image,U.age,U.province, JSON_OBJECT('posts',U.posts,'likes',U.likes,'friends',U.friends) as metaData, JSON_OBJECT('id',C.id,'name',C.name,'code',C.code) AS country, JSON_OBJECT('id',G.id,'name',G.name) AS gender, JSON_OBJECT('id',ACT.id,'name',ACT.name) AS active FROM USER AS U INNER JOIN COUNTRY AS C ON C.id=U.country INNER JOIN GENDER AS G ON G.id=U.gender INNER JOIN active as ACT ON ACT.id=U.active WHERE U.ACTIVE = 1";

export const queryFetchUserSingle: string =
  queryFetchUserAllWithoutPassword + ' AND U.id = ?';

// Auth Querys

export const queryUserEmailExists: string =
  'SELECT USER.email FROM USER WHERE USER.email = ?';

export const queryAuthLogin: string =
  queryFetchUserAllWithPassword + ' AND U.email = ?';

export const queryAuthRegister: string =
  'INSERT INTO USER (username,email,password,firstname,lastname,age,country,province,gender) VALUES (?,?,?,?,?,?,?,?,?)';

// Friend Request
export const queryFetchFriendRequestSingle: string =
  'SELECT * FROM FRIEND_REQUEST AS FR WHERE FR.id = (?)';

export const queryFetchFriendRequestRecived: string =
  'SELECT * FROM FRIEND_REQUEST AS FR WHERE FR.receiver = (?) AND FR.accepted = 2 AND FR.active = 1';

export const queryFetchFriendRequestAlreadyExistPending: string =
  'SELECT * FROM FRIEND_REQUEST AS FR WHERE FR.receiver = (?) AND FR.sender = (?) AND FR.accepted = 2';

export const querySendFriendRequest: string =
  'INSERT INTO FRIEND_REQUEST (sender,receiver) VALUES (?,?)';

export const queryResponseFriendRequest: string =
  'UPDATE FRIEND_REQUEST AS FR SET FR.accepted = (?) WHERE FR.id = (?)';

export const queryFetchFriendRequestReceived: string =
  "SELECT JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image,'age',U.age,'province',U.province,'country',JSON_OBJECT('id',C.id,'name',C.name,'code',C.code),'gender',JSON_OBJECT('id',G.id,'name',G.name),'metaData',JSON_OBJECT('friends',U.friends,'posts',U.posts,'likes',U.likes)) AS user, JSON_OBJECT('id',FR.id,'state',JSON_OBJECT('state',FR.accepted,'name',AC.name)) as requestData FROM FRIEND_REQUEST AS FR INNER JOIN USER AS U ON U.id=FR.sender INNER JOIN COUNTRY AS C ON C.id=U.country INNER JOIN GENDER AS G ON G.id=U.GENDER INNER JOIN ACCEPTED AS AC ON AC.id=FR.accepted WHERE FR.receiver = (?) AND FR.active = 1 AND FR.accepted= 2";

// Friend list
export const queryGetFriendList: string =
  "SELECT JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image,'age',U.age,'province',U.province,'country',JSON_OBJECT('id',C.id,'name',C.name,'code',C.code),'gender',JSON_OBJECT('id',G.id,'name',G.name),'metaData',JSON_OBJECT('friends',U.friends,'posts',U.posts,'likes',U.likes)) AS user FROM FRIEND_LIST AS FL INNER JOIN USER AS U ON U.id=FL.user2 INNER JOIN COUNTRY AS C ON C.id=U.country INNER JOIN GENDER AS G ON G.id=U.GENDER WHERE FL.user1 = (?) AND FL.active = 1";

export const queryAddFriend: string =
  'INSERT INTO FRIEND_LIST (user1,user2) VALUES (?,?),(?,?)';

export const queryRemoveFriend: string =
  'UPDATE FRIEND_LIST AS FL SET FL.active = 0 WHERE ((FL.user1 = (?) and FL.user2 = (?)) or (FL.user1= (?) and FL.user2= (?)))';

// posts
export const queryFetchAllPosts: string =
  "SELECT P.id, P.text, P.image,P.likes,P.comments, JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image) as user FROM POST AS P INNER JOIN USER AS U ON P.user=U.id WHERE P.active = 1 ORDER BY p.created_at DESC";

export const queryFetchAllPostsByUser: string =
  "SELECT P.id, P.text, P.image,P.comments,P.likes, JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image) as user FROM POST AS P INNER JOIN USER AS U ON P.user=U.id WHERE P.active = 1 AND P.user = (?) ORDER BY p.created_at DESC";

export const queryFetchPostById: string =
  "SELECT P.id, P.text, P.image,P.likes,P.comments, JSON_OBJECT('id',U.id,'username',U.username,'firstname',U.firstname,'lastname',U.lastname,'image',U.image) as user FROM POST AS P INNER JOIN USER AS U ON P.user=U.id WHERE P.active = 1 AND P.id = (?) ORDER BY p.created_at DESC";
