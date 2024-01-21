'use server';
import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(formData: FormData) {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');
  const subject = formData.get('emailSubject');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  try {
    const data = await resend.emails.send({
      from: 'Website Contact Form <onboarding@resend.dev>',
      to: ['camchu.dev@gmail.com'],
      subject: subject as string,
      reply_to: senderEmail as string,
      text: message as string
    });
    return Response.json(data);
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
}
