import React from "react";
import { Route, Link, Switch } from "react-router-dom";

export default function Form(props) {
  const { formValues, change, submit, errors, buttonDisabled } = props;
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/pizza">Pizza</Link>
      <form onSubmit={submit}>
        <h2>Choice of Size and Sauce</h2>
        <p>Required</p>
        <label htmlFor="size">
          <select name="size" value={formValues.size} onChange={change}>
            <option value="">Select One</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">X-Large</option>
          </select>
        </label>
        <br />
        <label htmlFor="sauce" value={formValues.sauce} onChange={change}>
          <select name="sauce" value={formValues.sauce} onChange={change}>
            <option value="">Select One</option>
            <option value="red">Original Red</option>
            <option value="gRanch">Garlic Ranch</option>
            <option value="bbq">BBQ Sauce</option>
            <option value="sAfredo">Spinach Alfredo</option>
          </select>
        </label>
        <h2>Toppings</h2>
        {/* Internet is down changes below here were made with api test */}

        <label htmlFor="pep">
          Pepperoni
          <input type="checkbox" name="pep" onChange={change} />
        </label>
        <label htmlFor="saus">
          Sausage
          <input type="checkbox" name="saus" onChange={change} />
        </label>
        <label htmlFor="mush">
          Mushroom
          <input type="checkbox" name="mush" onChange={change} />
        </label>
        <label htmlFor="bac">
          Bacon
          <input type="checkbox" name="bac" onChange={change} />
        </label>

        {/* Internet is down changes above here were made with api test */}
        <br />
        <h2>Crust</h2>
        <label htmlFor="gFree">
          Gluten Free Crust +$1.00{" "}
          <input type="checkbox" name="gFree" onChange={change} />
        </label>
        <br />
        <h2>Instructions</h2>
        <label htmlFor="specInst">
          Special Instructions
          <input
            type="text"
            name="specInst"
            value={formValues.specInst}
            onChange={change}
          />
          {/* Put the errors on screen */}
          <p>{errors.email}</p>
        </label>
        <br />
        <label htmlFor="name">
          Who is ordering
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={change}
          />
          <br />
        </label>
        <label htmlFor="sub">
          <button name="sub" disabled={buttonDisabled}>
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
