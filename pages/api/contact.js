import { validateEmail, validate } from '../../utils';

// Sendgrid Mail Sender configuration
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.EMAIL_SENDGRID_API_BLACKTHORUS);

const contactApi =  async (req, res) => {
  const { name, email, message } = req.body;

  if (req.body) {
    const errors = validate(req.body, validateEmail);

    if (errors.length) {
      return res.status(400).send({ message: errors });
    }
  }

  const msg = {
    to: 'accounts@gemma.vet',
    from: 'accounts@gemma.vet',
    subject: 'New mail from contact form on gemma.vet',
    text: ` Somebody sent a message through the contact form on www.gemma.vet
      Name: ${name} 
      Email: ${email} 
      Message: ${message}`,
  };
  try {
    await sgMail.send(msg);
    res.json({ success: true, message: `Email was sent successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Error sending email' });

    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export default contactApi;
