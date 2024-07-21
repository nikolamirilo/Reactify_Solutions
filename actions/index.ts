"use server";
import { resend } from "@/constants";
import { ContactData } from "@/types";
import { sql } from "@vercel/postgres";

export async function addNewTestimonial(
  fullName: string,
  profession: string,
  content: string,
  rate: number
) {
  try {
    await sql.query({
      text: `CREATE TABLE IF NOT EXISTS testimonials(
        id SERIAL PRIMARY KEY,
        fullName VARCHAR(255),
        profession VARCHAR(255),
        content TEXT,
        rate INTEGER
      )`,
    });
    await sql.query({
      text: `INSERT INTO testimonials(fullName, profession, content, rate) VALUES($1, $2, $3, $4)`,
      values: [fullName, profession, content, rate],
    });
    return true;
  } catch (error: any) {
    console.log(error);
    return false;
  }
}

export async function getAllTestimonials() {
  try {
    await sql.query({
      text: `CREATE TABLE IF NOT EXISTS testimonials(
        id SERIAL PRIMARY KEY,
        fullName VARCHAR(255),
        profession VARCHAR(255),
        content TEXT,
        rate INTEGER
      )`,
    });
    const res = await sql.query({ text: `SELECT * FROM testimonials` });
    return res.rows;
  } catch (error: any) {
    console.log(error);
    return false;
  }
}
export async function sendEmail(contactData:ContactData) {
  const {message, email, name} = contactData
  try{
     const res = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'reactify.developer@gmail.com',
          subject: 'New message from Reactify Solutions website',
          html: `<div>
          <p>Email: ${email}</p>
          <p>Name: ${name}</p>
          <p>Message: ${message}</p>
          </div>`
        });
        console.log(res)
        if(res.error == null){
        return true
        }
  }catch(error:any){
      console.log(error)
      return false
  }
}
