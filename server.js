import express from 'express';
import users from './routes/users.js';
import contacts from './routes/contacts.js';
import auth from './routes/auth.js';
import connectDB from './config/db.js';

const app = express();
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send({ msg: 'Contact Keeper API' }));

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/contacts', contacts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
