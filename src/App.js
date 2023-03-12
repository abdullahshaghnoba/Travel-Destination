import Home from './components/Home/Home';
import TourDetails from './components/TourDetails/TourDetails'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div id='app' className='app' >
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/city/:id" element={<TourDetails/>}/>
        
        
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
