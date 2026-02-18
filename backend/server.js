import express from 'express';
import cors from 'cors';
import { lookup } from './src/controllers/LookupController.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/lookup', lookup);

const PORT = process.env.PORT || 5679;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));
