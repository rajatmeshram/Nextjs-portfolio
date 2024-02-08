
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rajatwebdesignerdeveloper@gmail.com',
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New Enquiry From {email}</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// import { Resend } from 'resend';

// const resend = new Resend('re_JBNsWDgf_3XXJfyyE89qYNpwUn1MiawoK');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'rajatwebdesignerdeveloper@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email2</strong>!</p>'
// });