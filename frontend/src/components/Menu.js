import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem'
  }

  return (
    <div>
      <ul>
        <li><NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to='/about' activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink to='/about/foo' activeStyle={activeStyle}>About Foo</NavLink></li>
        <li><NavLink to='/topic' activeStyle={activeStyle}>TopicList</NavLink></li>
        <li><NavLink to='/signin' activeStyle={activeStyle}>SignIn</NavLink></li>
        <li><NavLink to='/signup' activeStyle={activeStyle}>SignUp</NavLink></li>
      </ul>
      <hr />
    </div>
  )
}

export default Menu