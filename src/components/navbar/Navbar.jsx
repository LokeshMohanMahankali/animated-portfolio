import React from 'react'
import"./Navbar.scss"
function Navbar() {
  return (
    <div class="navbar"> 
    <div className="wrapper">
        <span>Lama Dev </span>
        <div className="social"> 
           <a href='#'><img src="facebook.png" alt='facebook'/></a>
           <a href='#'><img src="instagram.png" alt='instagram'/></a>
           <a href='#'><img src="youtube.png" alt='youtube'/></a>
           <a href='#'><img src="dribble.png" alt='dribble'/></a>
        </div> 
    </div>
    </div>
  )
}

export default Navbar
