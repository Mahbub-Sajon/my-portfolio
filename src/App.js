import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import ContactForm from './pages/components/ContactForm/ContactForm';
import Navbar from './pages/components/Navbar/Navbar';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

function App() {
  return (
  <div>
     <Navbar></Navbar>
     <Routes>
     <Route path='/project-detail/:id' element={<ProjectDetail></ProjectDetail>}></Route>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/contact-form' element={<ContactForm></ContactForm>}></Route>
     <Route path='/about' element={<About></About>}></Route>
   </Routes>
  </div>
  );
}

export default App;
