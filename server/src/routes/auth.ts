import { authLogin, authRegister, renewToken } from '../controllers/auth';
import { validJWT } from '../middlewares/validJWT';
import express from 'express';

const router = express.Router();
router.post('/', authLogin);
router.post('/register', authRegister);
router.get('/', validJWT, renewToken);

module.exports = router;
