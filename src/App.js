import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Error from './pages/error/Error';
import About from './pages/about/About';
import Signup from './pages/signup/Signup';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/*' element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
