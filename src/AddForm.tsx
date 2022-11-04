import { useMutation, useQueryClient } from '@tanstack/react-query'
import { nanoid } from 'nanoid'
import { FormEvent, useState } from 'react'
import { Api } from './api'
import { Todo } from './types/types'

function AddForm() {
  const queryClient = useQueryClient()

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const addTodoMutation = useMutation({
    mutationFn: (newTodo: Todo) => Api.addTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    addTodoMutation.mutate({
      id: nanoid(),
      name,
      description: desc,
      isDone: false,
    })

    setName('')
    setDesc('')
  }

  const canSubmit = Boolean(name.length && desc.length)

  return (
    <div className="flex bg-slate-600 rounded-md p-5 gap-4 items-center justify-between">
      <form
        onSubmit={onSubmit}
        className="flex flex-col lg:flex-row gap-4 w-full text-white"
      >
        <label className="flex flex-col w-full lg:w-[250px] text-sm">
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="bg-slate-500 p-3 mt-1 text-base rounded-md outline-none"
          />
        </label>
        <label className="flex flex-col w-full lg:w-[600px] text-sm">
          Description
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="bg-slate-500 p-3 mt-1 text-base rounded-md outline-none"
          />
        </label>
        <button
          className="bg-orange-600 hover:bg-orange-500 disabled:bg-slate-500 disabled:text-slate-400  p-2 mt-2 lg:mt-6 ml-auto rounded-md w-full lg:w-[120px]"
          disabled={!canSubmit}
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddForm
