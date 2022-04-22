import express from 'express';
import {
  fetchAllPosts,
  fetchAllPostUser,
  fetchPostById,
} from '../controllers/posts';
import { validJWT } from '../middlewares/validJWT';
const router = express.Router();
router.use(validJWT);

router.get('/id/:id', fetchPostById);
router.get('/:id', fetchAllPostUser);
router.get('/', fetchAllPosts);

module.exports = router;
