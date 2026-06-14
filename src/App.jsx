import React from 'react'
import { BrowserRouter,Route,Routes,Link,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Students from './pages/Students'
import StudentProfile from './pages/StudentProfile'
import StudentDashborad from './pages/StudentDashborad'
import Register from './pages/Register'
import Student_EditProfile from './pages/Student_EditProfile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/students' element={<Students/>}/>
        <Route path='/students/:id' element={<StudentProfile/>}/>
        <Route path='/' element={<StudentDashborad/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/students/:id/std_edit' element={<Student_EditProfile/>}/>
      </Routes>
    </BrowserRouter>
  
  )
}

export default App