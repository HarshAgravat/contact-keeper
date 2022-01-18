import express from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';

const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    body('name', 'Name is required').not().isEmpty(),
    body('email', 'Email is not valid').isEmail(),
    body('password', 'Password must be more than 6 characters').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) return res.status(400).json({ msg: 'User already exists' });

      user = new User({ name, email, password });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          return res.send({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server Error');
    }
  }
);

export default router;
