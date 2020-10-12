import React, {Fragment} from 'react';
import './App.css';
import './variables.css'
import Navbar from './base/Navbar';
import Tweets from './tweets/Tweets'
import Base from './base/Base'


function App() {
  return (
    <Fragment>
      <Navbar />
      <main id="page-container">
        <Tweets />
      </main>
    </Fragment>
    //<Base />  
  )
}


export default App;
