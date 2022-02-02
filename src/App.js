import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from "./Components/Login";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
       <Router>
           <Routes>
                <Route exact path='/login' element={<Login/>}></Route>
          </Routes>
       </Router>
   );
  }
}
 
export default App;
