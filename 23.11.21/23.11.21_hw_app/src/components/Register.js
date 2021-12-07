import React, { Component } from 'react'
import "./register.css"

export default class Register extends Component {
    state={firstName:"",lastName:"",email:"",password:"",confirmedPassword:""};
    FirstName = e => this.setState({firstName:e.target.value});
    LastName = e => this.setState({lastName:e.target.value});
    Email = e => this.setState({email:e.target.value});
    Password = e => this.setState({password:e.target.value});
    confirmedPassword = e => this.setState({confirmedPassword:e.target.value});
    validateForm = ()=>{
        const {firstName,lastName,email,password,confirmedPassword} = this.state;
         if(firstName.length > 0 && lastName.length > 0 && email.length > 0 && password.length > 0 && confirmedPassword.length > 0 && password === confirmedPassword) {
            return true
         } else {
             return false
         } 

    }
    registration = (e)=>{
        e.preventDefault()
        console.log(this.state);
    }


    render() {
        const disableButton = this.validateForm()
        // console.log(disableButton)
        // console.log(this.state);
        return (
            <form onSubmit={this.registration}>
            <div className="mainDiv">
                <h1>Register</h1>
                <h3>create your account | It's free and only takes a minute</h3>
                <input placeholder="First Name" onChange={this.FirstName}/>
                <input placeholder="Last Name" onChange={this.LastName}/><br/><br/>
                <input placeholder="Email" onChange={this.Email}/><br></br>
                <input placeholder="Password" onChange={this.Password}/><br></br>
                <input placeholder="Confirm Password" onChange={this.confirmedPassword}/><br></br>
                <input type="radio"/>I accept the terms of use and Privacy Policy<br></br>
                <button className="registerBtn" disabled={disableButton}>Register Now</button><br></br>
            </div>
            </form>
        )
    }
}
