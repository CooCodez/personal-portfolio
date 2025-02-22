const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());

// ✅ Fix CORS Preflight Issues
const corsOptions = {
  origin: "http://localhost:3000", // Allow frontend
  methods: ["GET", "POST", "OPTIONS"], // Allow POST and OPTIONS
  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOptions));

// ✅ Explicitly handle preflight requests
app.options("*", cors(corsOptions));

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// ✅ Nodemailer Transporter
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify Email Transporter
contactEmail.verify((error) => {
  if (error) {
    console.log("❌ Error verifying email:", error);
  } else {
    console.log("✅ Ready to Send Emails");
  }
});

// ✅ Contact Form API Route
app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
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

  contactEmail.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("❌ Error sending email:", error);
      return res.status(500).json({ status: "Error", message: "Failed to send message." });
    }
    console.log("✅ Email sent:", info.response);
    res.json({ code: 200, status: "Message Sent" });
  });
});
