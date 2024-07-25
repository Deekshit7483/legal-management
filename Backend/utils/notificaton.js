const nodemailer = require("nodemailer");


//! ============> NodeMailer utils

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'deekshithhr3729@gmail.com',
        pass: 'dgcvhlsdhwzumgsg'
    }
});

//! ===============> Send confirmation emails

const sendEmail = async (htmlBody) => {
        const mailOptions = {
            from: "deekshithhr3729@gmail.com",
            to: email,
            subject: "Verify your email",
            html: htmlBody, // html body
        };
        await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;