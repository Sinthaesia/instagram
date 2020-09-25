import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const { posts, setPosts } = useState([
    {
      username: "Sinthaesia",
      caption: "Instagram works",
      imageUrl: "https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png",
    },
    {
      username: "Sinthaesia",
      caption: "Instagram works",
      imageUrl: "https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png",
    }
  ]);

  // useEffect: runs a piece of code based on specific condition

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="Instagram clone"
        />
      </div>

      <h1>Hello REACT APP</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

      <Post
        username="Sinthaesia"
        caption="Instagram works"
        imageUrl="https://miro.medium.com/max/3840/1*yjH3SiDaVWtpBX0g_2q68g.png"
      />
      <Post
        username="Daan"
        caption="Indeed, it does seem to be working so far"
      />
      <Post
        username="Sinth"
        caption="Hey! I still need a coffee!"
        imageUrl="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
      />
    </div>
  );
}

export default App;
