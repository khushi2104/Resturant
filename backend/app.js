import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from './db/dbConnection.js';
import { ErrorHandeler, errorHandlerMiddleware } from "./error/error.js"; // Import ErrorHandeler and errorHandlerMiddleware
import reservationRouter from "./routes/reservationRoute.js";

const app = express();

dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();
app.use('/api/v1/reservation', reservationRouter);

// Use errorHandlerMiddleware as middleware
app.use(errorHandlerMiddleware);

export default app;
