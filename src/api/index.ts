import axios from 'axios'
import type { Todo } from '../types/types'

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
})

export const Api = {
  async getTodos() {
    const res = await instance.get<Todo[]>('/todos')
    return res.data
  },
  async addTodo(data: Todo) {
    const res = await instance.post('/todos', data)
    return res.data
  },
  async updateTodo(todoId: string, data: Partial<Todo>) {
    const res = await instance.patch(`/todos/${todoId}`, data)
    return res.data
  },
  async deleteTodo(todoId: string) {
    const res = await instance.delete(`/todos/${todoId}`)
    return res.data
  },
}
