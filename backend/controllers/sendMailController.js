const nodemailer = require("nodemailer");

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
        from:"Trang Shop",
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

  sendContact: async (req, res) => {
    try {
      const { email, title, content, fullname, phone } = req.body.data;
      const message = `From: ${fullname}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${content}`;
      const info = await transporter.sendMail({
        from:"Trang Shop",
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