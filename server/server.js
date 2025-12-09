import express from 'express';
import router from './routes/notesRoute';

const app = express();

const PORT = 5001;

app.use('/api/notes', router);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});
