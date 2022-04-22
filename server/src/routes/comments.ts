import express from 'express';
import { createComment, fetchCommentsByPost } from '../controllers/comments';
import { validJWT } from '../middlewares/validJWT';
const router = express.Router();
router.use(validJWT);

router.post('/:id', createComment);
router.get('/:id', fetchCommentsByPost);

module.exports = router;
