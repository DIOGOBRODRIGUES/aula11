// CreatePost.js
import { useState } from 'react';
import { criarPost } from '../services/posts';

function CreatePost({ posts, setPosts }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title: title,
        body: body,
        userId: 1, // usuário fictício
      };
      const createdPost = await criarPost(newPost);
      console.log('Post criado:', createdPost);
      setTitle('');
      setBody('');
      // Atualizar a lista de posts
      setPosts((prevPosts) => [createdPost, ...prevPosts]);
    } catch (error) {
      console.error('Erro ao criar post', error);
    }
  };

  return (
    <div>
      <h2>Criar Novo Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <textarea
          placeholder="Conteúdo"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Criar Post</button>
      </form>
    </div>
  );
}

export default CreatePost;