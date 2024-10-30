// PostList.js
import React from 'react';

function PostList({ posts }) {
  return (
    <div>
      <h2>Lista de Posts</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;