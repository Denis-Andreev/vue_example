import axios from 'axios'

export class PostsService {
  static async getPosts() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
  }
}