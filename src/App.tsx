import './App.css'
import { useEffect } from 'react'
import { setupScrollAnimations } from './scroll-animations'

// Icons
import AppRoutes from './Navigation/Routes/AppRoutes'

function App() {
  useEffect(() => {
    setupScrollAnimations()
  }, [])

  return (
    (<AppRoutes/>)
  )
}

export default App
