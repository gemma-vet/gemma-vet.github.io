import { validateEmail, validateFooterContact } from '../../utils';

// Sendgrid Mail Sender configuration
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_SENDGRID_API_BLACKTHORUS);

export default async (req, res) => {
  const { email, message } = req.body;

  if (req.body) {
    const errors = validateFooterContact(req.body, validateEmail);

    if (errors.length) {
      return res.status(400).send({ message: errors });
    }
  }

  const msg = {
    to: 'blackthorus@gmail.com',
    from: 'blackthorus@gmail.com',
    subject: 'New mail from contact form on gemma.vet',
    text: ` Somebody sent a message through the contact form on www.gemma.vet
      Email: ${email} 
      Message: ${message}`,
  };
  try {
    await sgMail.send(msg);
    res.json({ succes: true, message: `Email was sent successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error sending email' });

    if (error.response) {
      console.error(error.response.body);
    }
  }
};
