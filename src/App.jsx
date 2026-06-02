import React from 'react'
import { BrowserRouter,Route,Routes,Link,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './Components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App