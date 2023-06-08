import * as yup from "yup";

export const CATEGORY_CREATE_CHEMA = yup.object({
  name: yup.string("повинно бути строчкою").required("повинно бути заповненим"),
  sectionId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const CATEGORY_UPDATE_CHEMA = yup.object({
  name: yup.string("повинно бути строчкою").required("повинно бути заповненим"),
  categoryId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const CATEGORY_DELETE_CHEMA = yup.object({
  categoryId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const SECTION_CREATE_CHEMA = yup.object({
  name: yup.string("повинно бути строчкою").required("повинно бути заповненим"),
});
export const SECTION_DELETE_CHEMA = yup.object({
  sectionId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const SECTION_UPDATE_CHEMA = yup.object({
  name: yup.string("повинно бути строчкою").required("повинно бути заповненим"),
  sectionId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const SLIDER_CREATE_CHEMA = yup.object({
  productId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const SLIDER_DELETE_CHEMA = yup.object({
  sliderId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
export const PRODUCT_CREATE_CHEMA = yup.object({
  name: yup.string("повинно бути строчкою").required("повинно бути заповненим"),
  price: yup.number("повинно бути цифрою").required("повинно бути заповненим"),
  quantity: yup
    .number("повинно бути цифрою")
    .required("повинно бути заповненим"),
  categoryId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  brand: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  img: yup.string().required("повинно бути заповненим"),
  info: yup.array().of(
    yup.object({
      title: yup
        .string("повинно бути строчкою")
        .required("повинно бути заповненим"),
      description: yup
        .string("повинно бути строчкою")
        .required("повинно бути заповненим"),
    })
  ),
});
export const PRODUCT_UPDATE_CHEMA = yup.object({
  name: yup.string("повинно бути строчкою").required("повинно бути заповненим"),
  price: yup.number("повинно бути цифрою").required("повинно бути заповненим"),
  quantity: yup
    .number("повинно бути цифрою")
    .required("повинно бути заповненим"),
  categoryId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  brand: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
  info: yup.array().of(
    yup.object({
      title: yup
        .string("повинно бути строчкою")
        .required("повинно бути заповненим"),
      description: yup
        .string("повинно бути строчкою")
        .required("повинно бути заповненим"),
    })
  ),
});
export const PRODUCT_DELETE_CHEMA = yup.object({
  productId: yup
    .string("повинно бути строчкою")
    .required("повинно бути заповненим"),
});
