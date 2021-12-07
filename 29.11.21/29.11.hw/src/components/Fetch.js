import React from "react";
import FetchPosts from "./FetchToTable";

class Fetch extends React.Component {
  state = { posts: [] };
  getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => console.log(error));
  };
  componentDidMount() {
    this.getPosts();
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.getPosts}> get posts</button> */}
        <div>
          <table>
          <thead>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>delete</th>
          <th>update</th>
          </thead>
            <tbody>
              {" "}
              {this.state.posts.map((post, i) => (
                <FetchPosts key={i} postObj={post} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Fetch;
