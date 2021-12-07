import axios from "axios"
import "./weather.css"

import React, { Component } from 'react'

export default class Weather extends Component {
    state={city:"",temp:""}
    GetWeather= () => {
    // const Url = (event) => this.setState({Url:event.target.value})
        // console.log(this.state.Url);
        const city = this.state.city
        const MyApiKey = "8aefc84a6bfd3de246dbe5febbae2267"
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MyApiKey}`
    axios.get(URL)
    .then((res) => this.setState( {temp: (res.data.main.temp-273).toFixed()} ))
    .catch((err) =>this.setState({temp: "please check city name"}))
    

  }


    render() {
        return (
            <div className="weather">
                <h1>Welcome to Wether API </h1>
              <input placeholder="Select a City" onChange={e=>this.setState({city:e.target.value})}/><br/>
              <button onClick={this.GetWeather}>select</button>
              <p>The Current Temperature Is {this.state.temp}C</p>
            </div>
        )
    }
}
