import express from 'express';
import cors from 'cors'
import { initRoutes } from './routes/index.js' 
import init_db from './data_base/init_db.js'
import { config } from 'dotenv';
config({ path: './.env' });


const app = express()
const PORT = process.env.PORT || 3001


app.use(cors)
app.use(
  express.urlencoded({
    extended: true,
  })
)

initRoutes(app)
init_db()

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(
    `Server is listening at: ${PORT} - Click Here => http://localhost:${PORT}`
  );
});

