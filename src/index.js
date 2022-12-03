import  express, { json }  from "express";
import cors from "cors";
import router  from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(json())

app.use(router)



app.listen(5000, ()=>console.log("running at 5000 port"));