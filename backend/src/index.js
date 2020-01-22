import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

import app from express();

mongoose.connect('mongodb+srv://DevLopes:lopes@cluster0-hnjij.mongodb.net/week10?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);     
