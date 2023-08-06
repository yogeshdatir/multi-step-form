// * Reference: https://www.abstractapi.com/guides/react-phone-number-validation-regex

/* 
* This RegEx will match following phone formats:
  +919367788755
  8989829304
  +16308520397
  786-307-3615
  (786) 307-3615
*/
const PHONE_REGEX = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g
);

export const validateInternationalPhone = (phoneNumber: string) => {
  return PHONE_REGEX.test(phoneNumber);
};

const EMAIL_REGEX = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

const FULL_NAME_REGEX = new RegExp(/^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/);

export const validateName = (name: string) => {
  return FULL_NAME_REGEX.test(name);
};
