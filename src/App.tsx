import { useState } from 'react'
import Header from './Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-4">
        <div className="bg-slate-600 rounded-md p-5">
          <label className="">
            <input type="text" className="bg-slate-700 rounded-md" />
          </label>
        </div>
      </div>
    </>
  )
}

export default App
