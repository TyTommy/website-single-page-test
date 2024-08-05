import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="bg-red-500 border-4 border-indigo-600 p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 mb-4">{post.body}</p>
      <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
    </div>
  );
};

export default PostDetail;
