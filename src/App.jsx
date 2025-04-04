import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Home'
import RootLayout from './RootLayout'
import Login from './Login'
import Dashboard from './Dashboard'
import TextToText from './Text-To-Text'
import CreateAccount from './CreateAccoount'

function App() {

  const routes = createBrowserRouter([
    {
      path : '',
      element : <RootLayout/>,
      children : [
        {index : true,  element : <Home/>},
        {path : 'login', element : <Login/>},
        // {path : 'dashboard', element : <Dashboard/>},
        {path : 'text-to-text', element : <Dashboard/>},
        {path : 'createaccount', element : <CreateAccount/>},
      ]
    }
  ])
  
  return <RouterProvider router={routes}/>
}

export default App
