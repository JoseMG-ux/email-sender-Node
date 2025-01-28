import express from 'express';
import { sendEmail } from '../services/emailService';

const router = express.Router();

router.post('/send-email', async (req, res) => {
  const dataInvoice = req.body;

  try {
    const response = await sendEmail(dataInvoice);
    res.status(200).json({
      message: 'Correo enviado correctamente',
      messageId: response,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error al enviar el correo', error });
  }
});

export default router;
