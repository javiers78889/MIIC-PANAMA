
import dotenv from 'dotenv';

dotenv.config();

export const Envs = {
    url: process.env.BACK_URL,
    paypal: process.env.PAYPAL_CLIENT_ID,
    cdn_url: process.env.CDN_URL
}