// Sendgrid Mail Sender configuration
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_SENDGRID_API_BLACKTHORUS);

export default async (req, res) => {
  const { name, email, message } = req.body;
  const msg = {
    to: 'accounts@gemma.vet',
    from: 'accounts@gemma.vet',
    subject: 'New mail from contact form on gemma.vet',
    text: ` Somebody sent a message through the contact form on www.gemma.vet
    Name:${name} 
    Email:${email} 
    Message:${message}`,
  };
  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error sending email' });

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
