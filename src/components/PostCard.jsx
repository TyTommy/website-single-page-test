import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-red-500 rounded-lg flex">
      <img
        style={{ width: "350px", borderRadius: "5px" }}
        src="https://images6.alphacoders.com/133/1338694.png"
        alt={post.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.body.substring(0, 100)}...</p>
        <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
