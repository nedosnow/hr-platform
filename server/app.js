import dotenv from 'dotenv'
dotenv.config()

import express from 'express';

const app = express();

const { PORT } = process.env;


app.use(express.json());



app.listen(PORT, () => {
    console.log("Server has been started on PORT ", PORT);
});
