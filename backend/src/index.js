import express from 'express'
import api_router from './routes/router.js'
const PORT = process.env.PORT || 3001;

const app = express();

app.use('/api', api_router)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
