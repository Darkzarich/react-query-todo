import axios from 'axios'
import type { TodoItem } from '../types/types'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
})

export const Api = {
  async getTodos() {
    const res = await instance.get<TodoItem[]>('/todos')
    return res.data
  },
  async addTodo(data: TodoItem) {
    const res = await instance.post('/todos', data)
    return res.data
  },
}
