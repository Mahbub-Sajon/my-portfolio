import { Route, Routes } from 'react-router-dom';
import './App.css';
import ContactForm from './pages/components/ContactForm/ContactForm';
import Home from './pages/Home/Home';

function App() {
  return (
   <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     <Route path='/contact-form' element={<ContactForm></ContactForm>}></Route>
   </Routes>
  );
}

export default App;
