import { TodoItem as TodoItemType } from './types/types'
import classNames from 'classnames'

function TodoItem({ name, description, isDone }: TodoItemType) {
  const nameClasses = classNames(
    'text-3xl mb-1',
    isDone ? 'text-slate-400 line-through' : 'text-orange-400'
  )

  const descriptionClasses = classNames(
    'text-3xl mb-1',
    isDone ? 'text-slate-400 line-through' : 'text-orange-400'
  )

  return (
    <div className="flex justify-between border-2 border-transparent border-b-slate-800 p-5">
      <div>
        <div className={nameClasses}>{name}</div>
        <div className={isDone ? 'text-slate-400' : 'text-slate-200'}>
          {description}
        </div>
      </div>
      <div className="flex gap-3 items-center">
        {!isDone && (
          <button className="bg-green-600 hover:bg-green-500 text-white p-2 rounded-md w-[120px] h-[40px]">
            Complete
          </button>
        )}
        <button className="bg-red-600 hover:bg-red-500 text-white p-2 rounded-md w-[120px] h-[40px]">
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
