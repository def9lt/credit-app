import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
import MemoryStore from 'memorystore';
import routes from './routes';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create express app
const app = express();
app.use(express.json());

// Memory session
const MemStore = MemoryStore(session);
app.use(
  session({
    cookie: { maxAge: 86400000 },
    store: new MemStore({
      checkPeriod: 86400000,
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  })
);

// API routes
app.use('/api', routes);

// STATIC CLIENT BUILD
const clientDist = path.join(__dirname, '../client/dist');
app.use(express.static(clientDist));

// All other routes → React
app.get('*', (_, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
