import axios from 'axios'
import type { TodoItem } from '../types/types'

const Api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
})

export function getTodoList() {
  return Api.get<TodoItem[]>('/todos').then((res) => res.data)
}
