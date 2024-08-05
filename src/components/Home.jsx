import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostCard from './PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then(response => setPosts(response.data.posts))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="flex flex-wrap border-4 border-indigo-600">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
