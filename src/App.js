import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import Coinpage from './Pages/Coinpage'

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Homepage/>} exact/>
    <Route path="/coins/:id" element={<Coinpage/>}/>
    </Routes>
    </Router>
  );
}


export default App;
