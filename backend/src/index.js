import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

const index = express();

mongoose.connect('mongodb+srv://DevLopes:lopes@cluster0-hnjij.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

index.use(cors());
index.use(express.json());
index.use(routes);

export default index;