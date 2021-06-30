export const validateEmail = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validate = (body, validateEmail) => {
  const { name, email, message } = body;
  const errors = [];

  if (!name.trim().length) {
    errors.push('Please enter your name!!!');
  }
  if (!email.trim().length || !validateEmail(email)) {
    errors.push('Please check your email address!!!');
  }
  if (!message.trim().length) {
    errors.push('Please enter your message!!!');
  }

  return errors;
};

export const validateFooterContact = (body, validateEmail) => {
  const { email, message } = body;
  const errors = [];

  if (!email.trim().length || !validateEmail(email)) {
    errors.push('Please check your email address!!!');
  }
  if (!message.trim().length) {
    errors.push('Please enter your message!!!');
  }

  return errors;
};
