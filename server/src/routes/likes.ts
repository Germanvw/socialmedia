import {
  handleLike,
  getLikeStatus,
  getTotalLikesPost,
} from '../controllers/likes';
import { validJWT } from '../middlewares/validJWT';
import express from 'express';
const router = express.Router();
router.use(validJWT);

router.post('/:id', handleLike);
router.get('/:id', getLikeStatus);
router.get('/post/:id', getTotalLikesPost);
module.exports = router;
