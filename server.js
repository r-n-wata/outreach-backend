const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ruthnwata@gmail.com",
    pass: "nhfe boxi sxqg qawl",
  },
});

app.get("/send-test-email", async (req, res) => {
  const mailOptions = {
    from: req.body.from || "",
    to: "ruthnwata@gmail.com",
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
