import { useState } from 'react'
import Layout from './components/Layout/Layout'
import About from './pages/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
      <About/>
    </>
  )
}

export default App
