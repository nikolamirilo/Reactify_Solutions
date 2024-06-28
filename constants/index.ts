import { Resend } from "resend";

export const APP_URL = process.env.APP_URL!;
export const resend = new Resend(process.env.RESEND_API_KEY!);
