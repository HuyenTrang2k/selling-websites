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
    console.log(req.body);
    try {
      const { email, title, content, fullname, phone } = req.body;
      const message = `From: ${fullname}\nPhone: ${phone}\nMessage: ${content}`;
      const info = await transporter.sendMail({
        from: "Nhat Shop",
        to: email,
        subject: title,
        text: message,
      });

      console.log("Message sent: %s", info.messageId);

      res.send({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Failed to send email" });
    }
  },
};
module.exports = sendMailController;