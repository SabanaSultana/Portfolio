import { useState } from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'
import Techstack from './pages/Techstack/Techstack'
import Projects from './pages/Projects/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
      <div className="container">
        <About/>
        <Techstack/>
        <Projects/>
      </div>
    </>
  )
}

export default App
