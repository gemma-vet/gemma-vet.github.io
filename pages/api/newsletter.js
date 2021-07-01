import cryptoMD5 from 'crypto-js/md5';
import { validateEmail, validateNewsLetter } from '../../utils';

const listId = process.env.MAILCHIMP_LIST_ID;
const apiKey = process.env.MAILCHIMP_API_KEY;
const tag = process.env.MAILCHIMP_TAG;
const dataCenter = process.env.MAILCHIMP_DATACENTER;

export default async (req, res) => {
  const { email } = req.body;
  if (email) {
    const errors = validateNewsLetter(req.body, validateEmail);

    if (errors.length) {
      return res.status(400).send({ message: errors });
    }

    try {
      const existing = await getSubscriber(email);

      if (existing.status === 200) {
        const tag_response = await addTagToSubscriber(email);
        if (tag_response.status >= 400) {
          res.status(400).send({ message: 'Subscription Failed. Contact accounts@gemma.vet' });
          throw `There was an error while adding the tag to your email. Please contact us at accounts@gemma.vet`;
        }
      } else {
        const response = await addSubscriber(email);
        if (response.status >= 400) {
          res.status(400).send({ message: 'Subscription Failed. Contact accounts@gemma.vet' });
          throw `There was an error subscribing to the newsletter. Please contact us at accounts@gemma.vet`;
        }
      }
      return res.status(201).json({ success: true, message: 'Subscribed successfully' });
    } catch (error) {
      console.error({ error });
      return res.status(500).json({ error: error.message || error.toString() });
    }
  } else {
    res.status(200).send({ response: 'Api point working, waiting for req.body' });
  }
};

const getSubscriber = (email) => {
  const subscriber_hash = getSubscriberHash(email);

  return fetch(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriber_hash}`, {
    headers: {
      Authorization: `${apiKey}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
};

const addTagToSubscriber = (email) => {
  const subscriber_hash = getSubscriberHash(email);
  const data = {
    tags: [
      {
        name: tag,
        status: 'active',
      },
    ],
  };

  return fetch(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members/${subscriber_hash}/tags`, {
    body: JSON.stringify(data),
    headers: {
      Authorization: `${apiKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
};

const addSubscriber = (email) => {
  const data = {
    email_address: email,
    status: 'subscribed',
    tags: [tag],
  };

  return fetch(`https://${dataCenter}.api.mailchimp.com/3.0/lists/${listId}/members`, {
    body: JSON.stringify(data),
    headers: {
      Authorization: `${apiKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
};

const getSubscriberHash = (email) => {
  const parsedEmail = email.toLowerCase();
  return cryptoMD5(parsedEmail);
};
