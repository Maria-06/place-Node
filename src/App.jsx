import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';

function App(){
  return(
    <div>
      <center>
        <Header/>
        <Employees/>
        <Api/>
        <Footer/>
      </center>
    </div>
  );
};

export default App;