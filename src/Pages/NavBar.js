import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>  
      
    <div className="logo">
   Ghassen
    </div>
    <nav>
       <Link to='/'> Home </Link>
       <Link to='/Project'>Project</Link>
       <Link to='/About'> About us</Link>
       <Link to='/Contact'>  Contact</Link>
       <Link to='/SignIn'> Sign In</Link>
       <link to='/GetContacts'> join us </link>
    </nav>
</div>
  )
}

export default NavBar