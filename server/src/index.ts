import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

config();
// Express init
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/friend', require('./routes/friend'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
