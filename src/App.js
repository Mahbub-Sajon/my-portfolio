import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import ContactForm from './pages/components/ContactForm/ContactForm';
import Home from './pages/Home/Home';

function App() {
  return (
  <div>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/contact-form' element={<ContactForm></ContactForm>}></Route>
     <Route path='/about' element={<About></About>}></Route>
   </Routes>
  </div>
  );
}

export default App;
