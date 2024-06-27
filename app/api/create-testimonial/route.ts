import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: NextRequest) {
  const { fullName, profession, testimonial, rate } = await request.json();
  await sql.query({
    text: `CREATE TABLE IF NOT EXISTS testimonials(
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(255),
    profession VARCHAR(255),
    testimonial TEXT,
    rate INTEGER
  )`,
  });
  await sql.query({
    text: `INSERT INTO testimonials(fullName, profession, testimonial, rate) VALUES($1, $2, $3, $4)`,
    values: [fullName, profession, testimonial, rate],
  });
  return NextResponse.json(
    { message: "Testimonial added successfully" },
    { status: 200 }
  );
}
