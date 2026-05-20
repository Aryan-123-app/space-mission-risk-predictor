require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const { getAdminEmailTemplate, getUserAutoReplyTemplate } = require('./emailTemplates');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('🚀 MissionAI Email API is running');
});

// Helper to validate email
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Contact Route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  try {
    // 1. Send Admin Email
    await transporter.sendMail({
      from: `MissionAI Contact <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Transmission: ${subject}`,
      html: getAdminEmailTemplate({ name, email, subject, message }),
      replyTo: email,
    });

    // 2. Send Auto-Reply to User
    await transporter.sendMail({
      from: `MissionAI <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'MissionAI • We Received Your Transmission 🚀',
      html: getUserAutoReplyTemplate(name),
    });

    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Email API is running on http://localhost:${PORT}`);
});
