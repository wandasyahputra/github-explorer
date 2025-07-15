import { RouterProvider } from 'react-router'

import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { router } from './router'

function App() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  )
}

export default App
