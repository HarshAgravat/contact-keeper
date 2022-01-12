import express from 'express';

const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Log In User');
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', (req, res) => {
  res.send('Auth User');
});

export default router;
