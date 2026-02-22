import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { lookup } from './src/controllers/LookupController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/lookup', lookup);

// Serve Static Files
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// Catch-all to serve index.html for React routing
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0'; // Necessary for Cloud Run

const server = app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
    console.log('Static files served from:', publicPath);
});

server.on('error', (err) => {
    console.error('Server failed to start:', err);
    process.exit(1);
});
