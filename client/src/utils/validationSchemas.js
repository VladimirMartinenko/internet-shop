import * as yup from "yup";

export const LOGIN_CHEMA = yup.object({
  email: yup
    .string("повинно бути строчкою")
    .email("введіть email")
    .required("повинно бути заповненим"),
  password: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const REGISTRATION_CHEMA = yup.object({
  email: yup
    .string("повинно бути строчкою")
    .email("введіть email")
    .required("повинно бути заповненим"),
  password: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  firstName: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  lastName: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  phone: yup
    .string("повинні бути цифри")
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
      "не вірний номер"
    )
    .required("повинно бути заповненим"),
});
export const BAYER_CHEMA = yup.object({
  email: yup
    .string("повинно бути строчкою")
    .email("введіть email")
    .required("повинно бути заповненим"),
  firstName: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  lastName: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  phone: yup
    .string("повинні бути цифри")
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
      "не вірний номер"
    )
    .required("повинно бути заповненим"),
});
