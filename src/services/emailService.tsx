import React from 'react';

import { render } from '@react-email/render';
import EmailTemplate from '../template/EmailTemplate';
import emailClient from '../config/azureConfig';

// Endpoint para enviar correos
export const sendEmail = async (data: Invoice) => {
  try {
    // Renderizar el template como HTML
    const emailHtml = await render(<EmailTemplate />); //<EmailTemplate dataEmail={data} /> = En caso de enviar datos

    const message = {
      senderAddress:
        'your-domain',
      content: {
        subject: data.subject,
        html: emailHtml,
      },
      recipients: {
        to: [
          {
            address: data.cteemail,
          },
        ],
      },
    };

    const poller = await emailClient.beginSend(message);
    const response = await poller.pollUntilDone();

    return response;
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return error;
  }
};

