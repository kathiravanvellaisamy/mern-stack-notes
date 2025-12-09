import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  //Get all the Posts
  res.json({ message: 'you got 5 notes' });
});

router.post('/', (req, res) => {
  //craete a Post
  res.json({ message: 'Note created successfully!' });
});

router.put('/:id', (req, res) => {
  //Update a Post
  res.json({ message: 'Post updated successfully!' });
});

router.delete('/:id', (req, res) => {
  //Delete a Post
  res.json({ message: 'Post deleted successfully!' });
});

export default router;
