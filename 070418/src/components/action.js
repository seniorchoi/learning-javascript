import axios from 'axios';

const URL = 'http://reduxblog.herokuapp.com/api';
const postKey = '?key=13ufheu2';
const userKey = '?key=12ufheu2';


export function showOnline(){
  return axios.get(`${URL}/posts${userKey}`);

}

export function addOnline(user){
  return axios.post(`${URL}/posts${userKey}`, {"title": user});

}

export function getPosts() {
  return axios.get(`${URL}/posts${postKey}`);

}

export function createPost(post){
  return axios.post(`${URL}/posts${postKey}`,
    {"title": post.title,
    "content": post.content,
    "categories": post.categories});
}
