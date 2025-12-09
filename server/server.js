import express from 'express';

const app = express();

const PORT = 5001;

app.get('/api/notes', (req, res) => {
  //Get all the Posts
  res.json({ message: 'you got 5 notes' });
});

app.post('/api/notes', (req, res) => {
  //craete a Post
  res.json({ message: 'Note created successfully!' });
});

app.put('/api/notes/:id', (req, res) => {
  //Update a Post
  res.json({ message: 'Post updated successfully!' });
});

app.delete('/api/notes/:id', (req, res) => {
  //Delete a Post
  res.json({ message: 'Post deleted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
