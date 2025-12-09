import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  //Get all the Posts
  res.json({ message: 'Hi Kathir,you got 5 notes' });
});

router.post('/', (req, res) => {
  //craete a Post
  res.json({ message: 'Hi,Note created successfully!' });
});

router.put('/:id', (req, res) => {
  //Update a Post
  res.json({ message: 'Hi,Post updated successfully!' });
});

router.delete('/:id', (req, res) => {
  //Delete a Post
  res.json({ message: 'Hi,Post deleted successfully!' });
});

export default router;
