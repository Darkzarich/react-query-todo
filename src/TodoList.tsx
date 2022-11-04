import { useQuery } from '@tanstack/react-query'

import { getTodoList } from './api'
import Loader from './Loader'

import TodoItem from './TodoItem'

export function TodoList() {
  const {
    isLoading,
    isError,
    data: todos,
  } = useQuery(['todos'], {
    queryFn: getTodoList,
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <div className="p-4 text-center text-red-500 text-2xl">Request Error</div>
    )
  }

  if (!todos?.length) {
    return (
      <div className="p-4 text-center text-white text-2xl">
        The todo list is empty...
      </div>
    )
  }

  return (
    <>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </>
  )
}

export default TodoList
