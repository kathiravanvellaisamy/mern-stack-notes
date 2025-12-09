const getAllNotes = (req, res) => {
  //Get all the Posts
  res.json({ message: 'Hi Kathir,you got 5 notes' });
};

const createNote = (req, res) => {
  //craete a Post
  res.json({ message: 'Hi,Note created successfully!' });
};

const updateNote = (req, res) => {
  //Update a Post
  res.json({ message: 'Hi,Post updated successfully!' });
};

const deleteNote = (req, res) => {
  //Delete a Post
  res.json({ message: 'Hi,Post deleted successfully!' });
};

export { getAllNotes, createNote, updateNote, deleteNote };
