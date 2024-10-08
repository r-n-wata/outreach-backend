const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors"); // Import the CORS middleware

const port = 8000;

// Use the CORS middleware to allow requests from any origin
app.use(cors());

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "outretreats@gmail.com",
    pass: "zjum nyey smcc fcvj",
  },
});

app.post("/send-email", async (req, res) => {
  const mailOptions = {
    from: req.body.from || "",
    to: "outretreats@gmail.com",
    subject: req.body.subject,
    text: req.body.text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Test email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send test email.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
