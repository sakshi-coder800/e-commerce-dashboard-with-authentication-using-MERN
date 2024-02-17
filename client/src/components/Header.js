import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <div>
        <ul className='navlink'>
            <li><Link to="/"> Products</Link></li>
            <li><Link to="/add"> Add Product</Link></li>
            <li><Link to="/update"> Update Product</Link></li>
            <li><Link to="/logout"> Logout</Link></li>
            <li><Link to="/profile"> profile</Link></li>
            <li><Link to="/"> Add Product</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header
