import * as yup from "yup";

export const CATEGORY_CREATE_CHEMA = yup.object({
  name: yup.string("must be a string").required("this field is required"),
  sectionId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const CATEGORY_UPDATE_CHEMA = yup.object({
  name: yup.string("must be a string").required("this field is required"),
  categoryId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const CATEGORY_DELETE_CHEMA = yup.object({
  categoryId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const SECTION_CREATE_CHEMA = yup.object({
  name: yup.string("must be a string").required("this field is required"),
});
export const SECTION_DELETE_CHEMA = yup.object({
  sectionId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const SECTION_UPDATE_CHEMA = yup.object({
  name: yup.string("must be a string").required("this field is required"),
  sectionId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const SLIDER_CREATE_CHEMA = yup.object({
  productId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const SLIDER_DELETE_CHEMA = yup.object({
  sliderId: yup
    .string("must be a string")
    .required("this field is required"),
});
export const PRODUCT_CREATE_CHEMA = yup.object({
  name: yup.string("must be a string").required("this field is required"),
  price: yup.number().typeError("must be a number").required("this field is required"),
  hasSizes: yup.boolean(),
  quantity: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" || originalValue === null ? undefined : value
    )
    .when("hasSizes", {
      is: true,
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema.typeError("must be a number").required("this field is required"),
    }),
  categoryId: yup
    .string("must be a string")
    .required("this field is required"),
  brand: yup
    .string("must be a string")
    .required("this field is required"),
  img: yup.string().required("this field is required"),
  img2: yup.string(),
  sizes: yup.array().when("hasSizes", {
    is: true,
    then: (schema) =>
      schema.test(
        "named-size",
        "add at least one size",
        (value) =>
          Array.isArray(value) &&
          value.some((row) => row && String(row.name || "").trim())
      ),
  }),
  info: yup.array().of(
    yup.object({
      title: yup
        .string("must be a string")
        .required("this field is required"),
      description: yup
        .string("must be a string")
        .required("this field is required"),
    })
  ),
});
export const PRODUCT_UPDATE_CHEMA = yup.object({
  name: yup.string("must be a string").required("this field is required"),
  price: yup.number().typeError("must be a number").required("this field is required"),
  hasSizes: yup.boolean(),
  quantity: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" || originalValue === null ? undefined : value
    )
    .when("hasSizes", {
      is: true,
      then: (schema) => schema.notRequired(),
      otherwise: (schema) =>
        schema.typeError("must be a number").required("this field is required"),
    }),
  categoryId: yup
    .string("must be a string")
    .required("this field is required"),
  brand: yup
    .string("must be a string")
    .required("this field is required"),
  sizes: yup.array().when("hasSizes", {
    is: true,
    then: (schema) =>
      schema.test(
        "named-size",
        "add at least one size",
        (value) =>
          Array.isArray(value) &&
          value.some((row) => row && String(row.name || "").trim())
      ),
  }),
  info: yup.array().of(
    yup.object({
      title: yup
        .string("must be a string")
        .required("this field is required"),
      description: yup
        .string("must be a string")
        .required("this field is required"),
    })
  ),
});
export const PRODUCT_DELETE_CHEMA = yup.object({
  productId: yup
    .string("must be a string")
    .required("this field is required"),
});
