import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { revalidateData } from "@/helpers/server";

export const dynamic = "force-dynamic"

export async function GET() {
  await sql.query({
    text: `CREATE TABLE IF NOT EXISTS testimonials(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(255),
    profession VARCHAR(255),
    testimonial TEXT,
    rate INTEGER
  )`,
  });
  const testimonials = await sql.query({
    text: `SELECT * FROM testimonials`,
  });
  revalidateData()
  return NextResponse.json(testimonials.rows);
}
