import expres from 'express'
import { sendReservation } from '../controller/reservation.js';
const router = expres.Router();


router.post('/send',sendReservation);
export default router;