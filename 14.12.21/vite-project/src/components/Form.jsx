import React, { useState } from "react";

const Form = () => {
  const [Form, setForm] = useState({ name: "", email: "", password: "" });

  const formDetails = (e) => {
    e.preventDefault();
    console.log(
      `Name is: ${Form.name},
       Password is : ${Form.password}, 
       Email Adress Is : ${Form.email} `
    );
  };

  return (
    <form>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...Form, name: e.target.value })}
      />
      <br /><br />
      <input
        placeholder="Password"
        onChange={(e) => setForm({ ...Form, password: e.target.value })}
      />
      <br /><br />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...Form, email: e.target.value })}
      />
      <br /><br />
      <input type="submit" onClick={formDetails} />
    </form>
  );
};
export default Form;
