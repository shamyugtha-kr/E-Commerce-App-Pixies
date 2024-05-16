import * as yup from "yup";
const validationschema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Minimum 8 characters required")
    .required("Password is required"),
});
export default validationschema;
