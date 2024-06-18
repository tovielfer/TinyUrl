// import express from 'express'
// import bodyParser from "body-parser";
// import cors from "cors"
// import jwt from "jsonwebtoken";



// const secret = "JIs%WCfS#Sl454d5FX";
// const token = jwt.sign({ userId: 1, roles: ["teacher"] }, secret);
// try {
//   const decoded = jwt.verify(token, secret);
// } catch {
//   //JWT is not valid
// }

// connectDB();
// const app = express();

// const port = 3000

// app.use(cors());
// app.use(bodyParser.json());

// app.use('/tasks', TasksRouter);

// app.listen(port, () => {
//   console.log(`Example app listening on http://localhost:${port}`)
// })

console.log("hi👋");

import express from 'express'  
import cors from "cors"
import bodyParser from "body-parser";
import LinksRouter from './Routers/LinksRouter.js';
import UsersRouter from './Routers/UsersRouter.js';
import connectDB from './database.js';


connectDB();

const app = express();
const port = 3000



app.use('/links', LinksRouter);
app.use('/users', UsersRouter);

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})