import {Route, Routes} from 'react-router-dom';
import ForumModule from './components/ForumModule';
import CourseForm from './components/CourseForm';
import Login from './pages/Login';

import Home from './pages/Home';
import Mycourses from './pages/Mycourses';
import MyCourses from './pages/Mycourses';
import SignUp from './pages/SingnUp';


function App() {


  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/mycourses' element={<Mycourses/>}/>
        <Route path='/mycourses/:courseType' element={<MyCourses/>}/>
        <Route path='/forum' element={<ForumModule/>}/>
        <Route path='/courses/new' element={<CourseForm/>}/>
    </Routes>

    </>
  )
}

export default App
