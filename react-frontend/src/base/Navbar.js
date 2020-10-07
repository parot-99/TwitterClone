import React from 'react'

const Navbar = () => {
  return (
    <header id="main-header">
      <div className="container flexed">
        <h1 className="cursor">TweetMe</h1>
        <nav className="nav-bar flexed">
          <h3 className="nav-btn cursor">Home</h3>  
          <h3 className="nav-btn cursor">Contact</h3>  
        </nav>     
      </div>
    </header>
  )
}


export default Navbar