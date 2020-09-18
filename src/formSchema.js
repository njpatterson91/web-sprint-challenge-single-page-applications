import * as yup from "yup";

export default yup.object().shape({
  // name: yup.string().required("Whatever Error Message You Want"),
  pep: yup.string(),
  saus: yup.string(),
  mush: yup.string(),
  bac: yup.string(),
  gFree: yup.string(),
  size: yup.string().min(3).required(),
  name: yup.string().min(2).required(),
  sauce: yup.string().min(3).required(),
  specInst: yup.string(),
});
