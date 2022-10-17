import { useState } from 'react'
import Header from './Header'
import './App.css'
import TodoItem from './TodoItem'
import AddForm from './AddForm'

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">
        <AddForm />

        <div className="flex flex-col bg-slate-600 rounded-md mt-4">
          <TodoItem
            name="Task1"
            id={1}
            isDone={false}
            description="my test task"
          />
          <TodoItem
            name="Task2"
            id={2}
            isDone={false}
            description="my test task"
          />
          <TodoItem
            name="Task3"
            id={3}
            isDone={true}
            description="my test task"
          />
        </div>
      </div>
    </>
  )
}

export default App
