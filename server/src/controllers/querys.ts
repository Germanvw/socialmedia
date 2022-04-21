export const queryFetchUserAll: string =
  "SELECT U.id, U.username, U.email, U.firstname, U.lastname,U.image,U.age,U.province, JSON_OBJECT('posts',U.posts,'likes',U.likes,'friends',U.friends) as metaData, JSON_OBJECT('id',C.id,'name',C.name,'code',C.code) AS country, JSON_OBJECT('id',G.id,'name',G.name) AS gender, JSON_OBJECT('id',ACT.id,'name',ACT.name) AS active FROM USER AS U INNER JOIN COUNTRY AS C ON C.id=U.country INNER JOIN GENDER AS G ON G.id=U.gender INNER JOIN active as ACT ON ACT.id=U.active WHERE U.ACTIVE = 1";

export const queryFetchUserSingle: string = queryFetchUserAll + ' AND U.id = ?';

// Auth Querys

export const queryUserEmailExists: string =
  'SELECT USER.email FROM USER WHERE USER.email = ?';

export const queryAuthLogin: string = 'SELECT * FROM USER WHERE USER.email = ?';

export const queryAuthRegister: string =
  'INSERT INTO USER (username,email,password,firstname,lastname,age,country,province,gender) VALUES (?,?,?,?,?,?,?,?,?)';
