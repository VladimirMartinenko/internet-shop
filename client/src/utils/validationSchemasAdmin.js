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
