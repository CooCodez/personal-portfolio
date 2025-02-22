const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter
transporter.verify((error) => {
  if (error) {
    console.error("❌ Error verifying email:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// Firebase Cloud Function
exports.sendEmail = functions.https.onRequest((req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "loyamark@gmail.com", 
    subject: "📩 Contact Form Submission - Portfolio",
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Phone:</strong> ${phone}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(500).json({ status: "Error", message: "Failed to send message." });
    }
    console.log("✅ Email sent:", info.response);
    res.json({ code: 200, status: "Message Sent" });
  });
});
