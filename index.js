import express from 'express';
import exploreRoutes from './modules/client/explore/explore.routes.js';

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running and connected to Supabase!');
});

app.use('/api/explore', exploreRoutes);

app.listen(3000, () => {
    console.log("server running on port 3000...");
});