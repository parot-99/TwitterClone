import React from 'react';
import './App.css';
import './variables.css'
import Navbar from './base/Navbar';
import Tweets from './tweets/Tweets'


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main id="page-container" className="container ">
        <Tweets>
          <h1>Hola</h1>
        </Tweets>
      </main>
    </React.Fragment>  
  )
}



export default App;