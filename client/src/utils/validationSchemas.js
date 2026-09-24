import * as yup from "yup";

export const LOGIN_CHEMA = yup.object({
  email: yup
    .string("must be a string")
    .email("enter a valid email")
    .required("this field is required"),
  password: yup
    .string("must be a string")
    .required("this field is required"),
});
export const REGISTRATION_CHEMA = yup.object({
  email: yup
    .string("must be a string")
    .email("enter a valid email")
    .required("this field is required"),
  password: yup
    .string("must be a string")
    .required("this field is required"),
  firstName: yup
    .string("must be a string")
    .required("this field is required"),
  lastName: yup
    .string("must be a string")
    .required("this field is required"),
  phone: yup
    .string("must be digits")
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
      "invalid phone number"
    )
    .required("this field is required"),
});
export const BAYER_CHEMA = yup.object({
  email: yup
    .string("must be a string")
    .email("enter a valid email")
    .required("this field is required"),
  firstName: yup
    .string("must be a string")
    .required("this field is required"),
  lastName: yup
    .string("must be a string")
    .required("this field is required"),
  phone: yup
    .string("must be digits")
    .matches(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
      "invalid phone number"
    )
    .required("this field is required"),
  marketingConsent: yup.boolean(),
});
