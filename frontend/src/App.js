import RecycleStatistics from './pages/RecycleStatistics';
import {BrowserRouter as Router,
  Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className='App'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/reciclestatistics" exact element={<RecycleStatistics/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
