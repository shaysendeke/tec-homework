import React, { useEffect, useState } from "react";

export default function FetchReddit({ URL }) {
  const [posts, setPosts] = useState([]);

  const FetchReddit = () => {
    fetch(`https://www.reddit.com/r/${URL}.json`)
      .then((res) => res.json())
      .then((data) => setPosts(data.data.children))
      .catch((err) => console.log(err));
  };
  useEffect(FetchReddit);

  return (
    <div>
      {posts.map((post, index) => {
        return <p key={index}>Title: {post.data.title}</p>;
      })}
    </div>
  );
}
