const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,

    auth: {
        user: "quinton.conn68@ethereal.email",
        pass: "R3Hd6hsXR1PtsHnGJ6",
    },
});

async function main() {
    const info = await transporter.sendMail({
        from: '"<quinton.conn68@ethereal.email>"',
        to: 'edanemmanuel2@gmail.com',

        subject: "Hello",
        text: "hi people?",
    });

    console.log(`Message sent ${info.messageId}`);
}

main().catch(console.error);