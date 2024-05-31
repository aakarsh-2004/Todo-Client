import './App.css'
import About from './Components/About'
import AddTask from './Components/AddTask'
import EditTask from './Components/EditTask'
import LandingPage from './Components/LandingPage'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import UserTasks from './Components/UserTasks'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/signup' element={<Signup />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/addtask' element={<AddTask />} />
            <Route path='/tasks' element={<UserTasks />} />
            <Route path='/updatetask/:taskId' element={<EditTask />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
