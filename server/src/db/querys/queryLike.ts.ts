// Get like if exist at post from user
export const queryGetUserLikeByPost: string =
  'SELECT * FROM LIKE_COMMENT AS LC WHERE LC.user_id = (?) AND post_id = (?)';

// get all likes by post
export const queryGetLikesByPost: string =
  'SELECT * FROM LIKE_COMMENT AS LC WHERE POST_id = (?) ';

export const queryLikePost: string =
  'INSERT INTO LIKE_COMMENT (post_id,user_id) VALUES (?,?)';

export const queryDislikePost: string =
  'DELETE FROM LIKE_COMMENT AS LC WHERE LC.user_id = (?) AND LC.post_id = (?)';
