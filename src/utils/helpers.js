export const mobileValidate = (number) => {
  const regexpMobile = /^[0-9\b]+$/;
  if (number === "" || regexpMobile.test(number)) {
    return true;
  }
  return false;
};

export const emailValidate = (emailid) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(emailid)) {
    return true;
  }
  return false;
};
