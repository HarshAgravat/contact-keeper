import express from 'express';

const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all user contacts');
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Add new contact');
});

// @route   PUT api/contacts/:id
// @desc    Add new contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route   DELETE api/contacts/:id
// @desc    Add new contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete contact');
});

export default router;
