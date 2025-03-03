import express from "express";
import cors from "cors";
import rootRoutes from "./src/routes/rootRoutes.js";


const app = express();

// sử dụng cors
app.use(cors());

// expose hình, video ra ngoài internet
app.use(express.static("."));

// parse body từ string => JSON
app.use(express.json());

// import rootRoutes
app.use(rootRoutes);





const port = process.env.PORT;
app.listen(port, () => {
  console.log(`BE is running on port ${port}`);
});
