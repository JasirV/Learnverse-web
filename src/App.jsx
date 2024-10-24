import {Route, Routes} from 'react-router-dom';
import ForumModule from './components/ForumModule';
import CourseForm from './components/CourseForm';
import Login from './pages/Login';
import SingnUp from './pages/SingnUp';
import Home from './pages/Home';


function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/singnup' element={<SingnUp/>}/>
        <Route path='/forum' element={<ForumModule/>}/>
        <Route path='/courses/new' element={<CourseForm/>}/>
    </Routes>

    </>
  )
}

export default App
