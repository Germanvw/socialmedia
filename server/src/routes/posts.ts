import express from 'express';
import {
  deletePost,
  fetchAllPosts,
  fetchAllPostUser,
  fetchPostById,
} from '../controllers/posts';
import { validJWT } from '../middlewares/validJWT';
import { createPost } from '../controllers/posts';
const router = express.Router();
router.use(validJWT);

router.get('/user/:id', fetchAllPostUser);
router.get('/:id', fetchPostById);
router.get('/', fetchAllPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);

module.exports = router;
