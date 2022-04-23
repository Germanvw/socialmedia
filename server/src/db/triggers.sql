create trigger upCommentCountOnCreate after insert on post_comment
for each row 
  update post set comments = COALESCE(comments, 0) + 1 
  where id = NEW.post_id;

create trigger dropCommentCountOnDelete after delete on post_comment
for each row 
  update post set comments = COALESCE(comments, 0) - 1 
  where id = OLD.post_id;

  create trigger upLikeCountOnCreate after insert on LIKE_COMMENT
for each row 
  update post set likes = COALESCE(likes, 0) + 1 
  where id = NEW.post_id;
  
create trigger dropLikeCountOnDelete  after delete on LIKE_COMMENT
for each row 
  update post set likes = COALESCE(likes, 0) - 1 
  where id = OLD.post_id;