import { json } from "express";
import {ErrorHandeler }from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !email || !phone || !time || !date) {
        return next(new ErrorHandeler('Please provide all info', 400));
    }
    try {
        await Reservation.create({ firstName, lastName, email, phone, time, date }); // Pass all fields as an object
        res.status(201).json({  // Corrected syntax for sending JSON response
            success: true,
            message: "Reservation sent successfully"
        });
    } catch (e) {
        if (e.name == 'ValidationError') {
         
            const validationErrors = Object.values(e.errors).map((err) => err.message);
            return next(new ErrorHandeler(validationErrors.join(","), 400));
        }
        return next(e);
    }
}
