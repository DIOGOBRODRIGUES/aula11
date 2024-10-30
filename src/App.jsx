// App.js
import './App.css';
import CreatePost from './components/CreatePost.jsx';
import PostList from './components/PostList.jsx';
import { useState, useEffect } from 'react';
import { getPosts } from './services/posts';

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postsData = await getPosts();
      setPosts(postsData);
    } catch (error) {
      console.error('Erro ao buscar posts', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Gerenciador de Posts</h1>
      <CreatePost setPosts={setPosts} posts={posts} />
      <hr />
      <PostList posts={posts} />
    </>
  );
}

export default App;