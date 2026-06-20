import 'dotenv/config'
import connectDB from "./db/index.js";
import { httpServer } from './app.js'

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        httpServer.listen(PORT, () => {
            console.log(`Server is running at port : ${PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })