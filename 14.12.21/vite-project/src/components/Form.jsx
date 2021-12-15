import React , {useState} from 'react';

const Form = () => {
    const [Form, setForm] = useState({ name: "", email: "", password: "" });

    const formDetails = e => {
        e.preventDefault();
        console.log(
          `Name is: ${Form.name},
           Password is : ${Form.password}, 
           Email Adress Is : ${Form.email} `
        );
      };
    
    return (
        <form >
        <input
          type="text"
          value={Form.name}
          placeholder="Name"
          onChange={e => setForm({ ...Form, name: e.target.value})}
        /><br/><br/>
        <input
          type="password"
          value={Form.password}
          placeholder="Password"
          onChange={e => setForm({ ...Form, password: e.target.value })}
        /><br/><br/>
        <input
        //   type="email"
          value={Form.email}
          placeholder="Email"
          onChange={e => setForm({ ...Form, email: e.target.value })}
        /><br/><br/>
        <input type="submit" onClick={formDetails} />
      </form>
    );
  };
export default Form;
