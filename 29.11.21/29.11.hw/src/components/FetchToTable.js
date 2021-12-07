import React, { Component } from "react";
export default class Fetchposts extends Component {
  render() {
    return (
      <tr>
        <td> {this.props.postObj.id}</td>
        <td> {this.props.postObj.title}</td>
        <td> {this.props.postObj.body}</td>
        <td><img
          src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
          alt=""
          onClick={this.props.deletePost}
        ></img></td>
        <td><img
          src="https://cdn-icons.flaticon.com/png/128/5129/premium/5129694.png?token=exp=1638287778~hmac=4ef083b51bf31bc979dc70bd889c395a"
          alt="update"
        ></img></td>
      </tr>
    );
  }
}
