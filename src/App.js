import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel'

class App extends Component {
  render() {
    return (
      <div className = "cards">
        <Travel
            destination = "ASIE"
            country = "vietnam"
            photo = 'https://expat-03cdkbceglbjg.stackpathdns.com/images/destinations-pictures/vietnam.jpg'
             distance = "10000 KM"
         />

           <Travel
            destination = "ASIE"
            country = "Ho yan"
            photo = "http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/hoi-an/pagePropertiesImage/hoi-an.jpg.jpg"
             distance = "10000 KM"
         />


      </div>




    );
  }
}

export default App;
