import express from 'express';
import {
  fetchAllPosts,
  fetchAllPostUser,
  fetchPostById,
} from '../controllers/posts';
import { validJWT } from '../middlewares/validJWT';
const router = express.Router();
router.use(validJWT);

router.get('/user/:id', fetchAllPostUser);
router.get('/:id', fetchPostById);
router.get('/', fetchAllPosts);

module.exports = router;
