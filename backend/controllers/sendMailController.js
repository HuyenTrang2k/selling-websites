const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMailController = {
  sendMail: async (req, res) => {
    try {
      const { email, title, content, fullname, phone } = req.body.data;
      const message = `From: ${fullname}\nPhone: ${phone}\nMessage: ${content}`;
      const info = await transporter.sendMail({
        from: "Trang Shop",
        to: email,
        subject: title,
        text: message,
      });
      res.send({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to send email" });
    }
  },
  sendCodeResetPassword: async (email, token, code) => {
    try {
      const mailOptions = {
        from: 'Trang Shop',
        to: email,
        subject: 'Reset Password',
        html: `
          <p>Please enter the following code to reset your password:</p>
          <p>${code}</p>
          <p>Or click the following link to reset your password:</p>
          <a href="${process.env.BASE_URL}/reset-password?token=${token}">Reset Password</a>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log('Reset password email sent');
    } catch (error) {
      console.error('Failed to send reset password email:', error);
    }
  },
  
  sendContact: async (req, res) => {
    try {
      const { email, title, content, fullname, phone } = req.body.data;
      const message = `From: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${content}`;
      const info = await transporter.sendMail({
        from: "Trang Shop",
        to: 'Ninakhoa1234@gmail.com',
        subject: title,
        text: message,
      });
      res.send({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to send email" });
    }
  },
};
module.exports = sendMailController;