import * as yup from "yup";

export const productValidationSchema = yup
  .object({
    name: yup.string().trim().required("Product name is required"),

    price: yup
      .number()
      .typeError("The price must be a number")
      .positive("The price must be a positive number")
      .required("The price is required"),

    category: yup.string().required("Please select a required category"),

    image: yup
      .string()
      .trim()
      .url("The image URL is not valid (e.g., https://...)")
      .required("The image URL is required"),
  })
  .required();
