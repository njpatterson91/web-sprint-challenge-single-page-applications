import React, { useState, useEffect } from "react";
import Form from "./Form";
import * as yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";

const defaultValues = {
  size: "",
  sauce: "",
  specInst: "",
  gfree: "",
  pep: "",
  saus: "",
  mush: "",
  bac: "",
};
const defaultErrors = {
  name: "",
  email: "",
  terms: "",
};

function App() {
  //Values of the form
  const [formValues, setFormValues] = useState(defaultValues);
  //Storing the values from the form
  const [savedFormInfo, setSavedFormInfo] = useState([]);
  //State for errors
  const [errors, setErrors] = useState(defaultErrors);
  //button disabled state
  //State to verify the post worked
  const [post, setPost] = useState([]);
  //The function to handle the onChange inside of the form
  const change = (evt) => {
    //Turns the evt.target(The place we are interacting with on the form )
    //Into something a bit more usable
    const { name, value } = evt.target;
    //Validates against schema
    // validate(name, value);
    //sets the current state of form based off from what is in the form
    setFormValues({
      ...formValues,
      [name]:
        evt.target.type === "checkbox" ? evt.target.value : evt.target.value,
    });
  };
  //Function for submitting the data to state.
  const submit = (evt) => {
    //Prevents the default behavious of submit which is reloading the page
    evt.preventDefault();
    //adding api support with axios
    axios.post("https://reqres.in/api/users", formValues).then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
    //packaging an easy to use payload to put onto state
    const newData = {
      // name: formValues.name.trim(),
      // email: formValues.email.trimEnd(),
    };
    //adding the data to state
    setSavedFormInfo([...savedFormInfo, newData]);
    setFormValues(defaultValues);
  };
  // const validate = (name, value) => {
  //   yup
  //     .reach(formSchema, name)
  //     .validate(value)
  //     .then((valid) => {
  //       setErrors({ ...errors, [name]: "" });
  //     })
  //     .catch((err) => {
  //       setErrors({ ...errors, [name]: err.errors[0] });
  //     });
  // };

  return (
    <div className="App">
      <Form
        formValues={formValues}
        change={change}
        submit={submit}
        errors={errors}
      />
    </div>
  );
}

export default App;
