import classNames from 'classnames'
import produce from 'immer'
import { Api } from './api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { Todo } from './types/types'

function TodoItem({ id, name, description, isDone }: Todo) {
  const queryClient = useQueryClient()

  const completeTodoMutation = useMutation({
    mutationFn: (data: Partial<Todo>) => Api.updateTodo(id, data),
    // Оптимистичное обновление
    onMutate: () => {
      queryClient.setQueryData(
        ['todos'],
        produce<Todo[]>((draft) => {
          const updateItem = draft.find((item) => item.id === id)
          if (updateItem) updateItem.isDone = true
        })
      )
    },
  })

  const deleteTodoMutation = useMutation({
    mutationFn: () => Api.deleteTodo(id),
    onMutate: () => {
      queryClient.setQueryData<Todo[]>(['todos'], (oldTodos) =>
        oldTodos?.filter((todo) => todo.id !== id)
      )
    },
  })

  return (
    <div className="flex flex-col lg:flex-row justify-between border-2 border-transparent border-b-slate-800 p-5">
      <div>
        <div
          className={classNames(
            'text-3xl mb-1',
            isDone ? 'text-slate-400 line-through' : 'text-orange-400'
          )}
        >
          {name}
        </div>
        <div className={isDone ? 'text-slate-400' : 'text-slate-200'}>
          {description}
        </div>
      </div>
      <div className="flex gap-3 items-center mt-3 lg:mt-0">
        {!isDone && (
          <button
            onClick={() => completeTodoMutation.mutate({ isDone: true })}
            className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-md w-[120px] h-[40px]"
          >
            Complete
          </button>
        )}
        <button
          onClick={() => deleteTodoMutation.mutate()}
          className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-md w-[120px] h-[40px]"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
