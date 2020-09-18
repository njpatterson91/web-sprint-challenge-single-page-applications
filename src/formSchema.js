import * as yup from "yup";

export default yup.object().shape({
  // name: yup.string().required("Whatever Error Message You Want"),
  size: yup.string().min(3).required(),
  sauce: yup.string().min(3).required(),
  specInst: yup.string(),
});
