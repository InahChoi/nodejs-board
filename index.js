import express from 'express';
import dotenv from 'dotenv';
import Index from './src/controllers/index.js';

const app = express();
dotenv.config();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', Index);

app.listen(process.env.PORT, (req, res) => {
  console.log('🚀 server PORT :', process.env.PORT)
});

export default app;