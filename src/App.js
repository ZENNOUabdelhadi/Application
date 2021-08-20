

import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/Contact';
function App() {
  return (
    <div>
     
     <Router>
        
          <Navbar/>
        
      </Router>
    </div>

  
 
);
  
  
}

export default App;
