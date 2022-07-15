import mongoose from 'mongoose';
import cors from 'cors';
import express from 'express';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.get('/', function(req, res) {
  return res.send('i am done ');
});

app.use('/posts', postRoutes);
app.use("/user", userRouter);
console.log("hellkko");
const CONNECTION_URL='mongodb+srv://nikhil:7000708080@cluster0.hzkqlj5.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));



  