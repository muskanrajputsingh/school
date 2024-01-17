import './index.css'
import './App.css';
import Home from './components/Home/Home';
import { Route,Routes} from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Admission from './components/Admission/Admission';
import Facility from './components/Facility/Facility';
import Achivement from './components/Achivement/Achivement';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Application from './components/application/Application';


function App() {
  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}  />
        <Route path='/achivement' element={<Achivement />} />
        <Route path='/facility' element={<Facility />} />
        <Route path='/register' element={<Admission />} />
        <Route path='/about' element={<About />}  />
        <Route path='/contact' element={<Contact />} />
        <Route path='/application' element={<Registration/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/applications' element={<Application/>} />
      </Routes>

     <Footer />
     </div>
    </>
  )
}

export default App



{/* <Navbar /><br /> 
     <Hero />
    <Facility />
    <Achivement/>
    <Poster images={craousel}/>
    <Footer />

    <Routes>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/admission' Component={Admission} />
    </Routes> */}