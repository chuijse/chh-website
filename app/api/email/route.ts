import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';



export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "chh.work",
    secure: true,
    port: 465,
    //logger: true,
    //ignoreTLS: true,
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    //text: message,
    html: `
    <section>
        <div>
            <h3 style="font-size: 21px; font-weight: 200; margin-bottom: 10px; font-family: Verdana, Geneva, Tahoma, sans-serif;">Hola Cristian</h3>
            <h2 style="font-size: 28px; font-weight: 200; margin: 15px; margin-left: 0px; font-family: Verdana, Geneva, Tahoma, sans-serif;">Tiene in mensaje de <b>${name}</b> de mail <b>${email}</b></h2>
        </div>
        <div>
            <p style="font-size: 15px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: 600; text-transform: uppercase;"><b>mensaje:</b></p>
            <p style="font-size: 17px; font-family: Verdana, Geneva, Tahoma, sans-serif;">${message}</p>
            <p style="font-size: 12px; font-weight: 600; margin: 15px; margin-left: 0px; text-transform: uppercase; font-family: Verdana, Geneva, Tahoma, sans-serif;">Este mensaje proviene de chh.work</p>
        </div>
    </section>
    `,
  };

  const sendMailPromise = async () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}