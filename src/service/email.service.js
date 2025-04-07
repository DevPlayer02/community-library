import nodemailer from 'nodemailer';
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
});

function sendEmail(email, username, bookTitle, dueDate) {
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Remider: Book Due Date Approaching',
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                <h2 style="color: #f60;"> Community Library Reminder </h2>
                <p> Dear ${username}, </p>
                <p> This is a reminder that the book <strong> "${bookTitle}" </strong> is due on <strong> "${dueDate}" </strong>. </p>
                <p> Please make sure to return or renew it on time. </p>
                <p> Best regard, <br> Your Community Library </p>
            </div>
        `,
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

export default sendEmail;