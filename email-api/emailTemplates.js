const getAdminEmailTemplate = (data) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>New Contact Request | GravitX</title>
    <style>
      body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #e2e8f0; background-color: #0f172a; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
      .card { background: #1e293b; border-radius: 16px; border: 1px solid #334155; padding: 32px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); }
      .header { border-bottom: 1px solid #334155; padding-bottom: 20px; margin-bottom: 24px; text-align: center; }
      .header h1 { color: #f8fafc; font-size: 24px; margin: 0; display: flex; align-items: center; justify-content: center; gap: 10px; }
      .badge { display: inline-block; background: linear-gradient(135deg, #a855f7, #6366f1); color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; margin-bottom: 16px; letter-spacing: 1px; }
      .detail-row { margin-bottom: 16px; }
      .detail-label { font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; font-weight: 600; }
      .detail-value { font-size: 16px; color: #f8fafc; background: rgba(255, 255, 255, 0.05); padding: 12px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.1); }
      .message-box { font-size: 15px; color: #f8fafc; background: rgba(168, 85, 247, 0.05); padding: 16px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.2); white-space: pre-wrap; line-height: 1.7; }
      .footer { margin-top: 32px; text-align: center; font-size: 12px; color: #64748b; }
      .highlight { color: #a855f7; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="header">
          <div class="badge">NEW TRANSMISSION</div>
          <h1><span class="highlight">GravitX</span> • System Alert</h1>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Sender Name</div>
          <div class="detail-value">${data.name}</div>
        </div>

        <div class="detail-row">
          <div class="detail-label">Sender Email</div>
          <div class="detail-value"><a href="mailto:${data.email}" style="color: #a855f7; text-decoration: none;">${data.email}</a></div>
        </div>

        <div class="detail-row">
          <div class="detail-label">Subject</div>
          <div class="detail-value">${data.subject}</div>
        </div>

        <div class="detail-row" style="margin-top: 24px;">
          <div class="detail-label">Transmission Log (Message)</div>
          <div class="message-box">${data.message}</div>
        </div>

      </div>
      <div class="footer">
        Received on ${new Date().toUTCString()}<br>
        MissionAI Internal System
      </div>
    </div>
  </body>
  </html>
  `;
};

const getUserAutoReplyTemplate = (name) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>We Received Your Transmission | GravitX</title>
    <style>
      body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #e2e8f0; background-color: #0f172a; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
      .card { background: #1e293b; border-radius: 16px; border: 1px solid #334155; padding: 32px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5); }
      .logo { font-size: 24px; font-weight: 800; color: #f8fafc; text-align: center; margin-bottom: 24px; display: block; }
      .logo span { color: #a855f7; }
      .content { font-size: 15px; color: #cbd5e1; }
      .content p { margin-bottom: 20px; }
      .highlight-box { background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1)); border-left: 4px solid #a855f7; padding: 16px; border-radius: 0 8px 8px 0; margin: 24px 0; }
      .footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid #334155; text-align: center; font-size: 13px; color: #64748b; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="card">
        <div class="logo">Gravit<span>X</span></div>
        
        <div class="content">
          <p>Hello ${name},</p>
          
          <p>Thank you for reaching out to MissionAI. We have successfully received your transmission and our systems are processing your inquiry.</p>
          
          <div class="highlight-box">
            Our aerospace and mission intelligence team will review your message and get back to you shortly, typically within 24-48 Earth hours.
          </div>
          
          <p>We look forward to connecting with you.</p>
          
          <p>Best regards,<br><strong>The GravitX Team</strong></p>
        </div>
        
        <div class="footer">
          GravitX • Advanced AI-driven mission intelligence<br>
          <a href="#" style="color: #64748b; text-decoration: none;">www.gravitX.com</a>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;
};

module.exports = {
  getAdminEmailTemplate,
  getUserAutoReplyTemplate
};
