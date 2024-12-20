const messages = {
  short: (type, min) => `${type} must be at least ${min} characters long`,
  long: (type, max) => `${type} must be at most ${max} characters long`,
};

export default messages;
