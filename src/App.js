import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer';



function App() {
  return (
    <BrowserRouter>
      <MyNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
