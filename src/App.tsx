import Header from './Header'
import TodoItem from './TodoItem'
import AddForm from './AddForm'
import './App.css'
import TodoList from './TodoList'

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-8">
        <AddForm />

        <div className="flex flex-col bg-slate-600 rounded-md mt-4">
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
