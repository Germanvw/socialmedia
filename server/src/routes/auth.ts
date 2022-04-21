import express from 'express';
import { authLogin, authRegister } from '../controllers/auth';

const router = express.Router();

router.post('/', authLogin);
router.post('/register', authRegister);

module.exports = router;
