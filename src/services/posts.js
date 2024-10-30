import axios from "axios";

const postsApi = axios.create({baseURL:"https://jsonplaceholder.typicode.com/posts"})

async function getPosts(){
    try {
        const response = await postsApi.get('/');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados na API ", error);
    }
}

async function criarPost(post){
    try {
        const response = await postsApi.post('/', post);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar post na API ", error);
    }
}

export {
    getPosts,
    criarPost
}