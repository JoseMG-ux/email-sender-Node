import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import sendEmailRoutes from './routes/sendEmailRoutes';

const app = express();

// Middleware
app.use(bodyParser.json());

const corsOptions = {
    origin: "http://localhost:3001",
    credentials: true
}

app.use(cors(corsOptions));

// Rutas
app.use('/api', sendEmailRoutes);

export default app;