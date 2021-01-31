const validateContactForm = (id, value) => {
  let error = false;
  let text = "";
  switch (id) {
    case "name":
      if (value.length > 100) {
        error = true;
        text = "Too long";
      }
      break;
    case "email":
      if (
        value.length > 0 &&
        !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
          value
        )
      ) {
        error = true;
        text = "Invalid Email";
      }
      break;
    case "phone":
      if (
        value.length > 0 &&
        !/1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?/.test(
          value
        )
      ) {
        error = true;
        text = "Invalid Phone Number";
      }
      break;
    default:
      break;
  }
  return { error, text };
};

export default validateContactForm;
