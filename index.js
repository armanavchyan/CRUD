import { createServer } from "http";
import app from "./app.js";
import 'dotenv/config';
const server = createServer(app);
const port = process.env.PORT || 3000 
server.listen(port, () => {
  console.log(`server is running in http://localhost:${port}`);
});