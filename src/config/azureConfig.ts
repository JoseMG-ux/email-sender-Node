import { AzureKeyCredential } from '@azure/core-auth';
import { EmailClient } from '@azure/communication-email';
import dotenv from 'dotenv';

dotenv.config();

const endpoint = process.env.ENDPOINT_AZURE;
const accessKey = process.env.ACCESS_KEY_AZURE;

if (!endpoint || !accessKey) {
  throw new Error(
    'Variables de entorno ENDPOINT_AZURE o ACCESS_KEY_AZURE no están definidas'
  );
}

let credential = new AzureKeyCredential(accessKey);
const emailClient = new EmailClient(endpoint, credential);

export default emailClient;