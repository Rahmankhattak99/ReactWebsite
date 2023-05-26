import React from 'react';
import {Link} from 'react-router-dom';
import{HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <>
    <nav>
        <h1>Programmer's.</h1>
        <main>
            <HashLink to={'/#Home'}>Home</HashLink>
            <HashLink to={'/#About'}>About</HashLink>
            <HashLink to={'/#Service'}>Brand</HashLink>
            <HashLink to={'/Service'}>Service</HashLink>
            <HashLink to={'/Contact'}>Contact</HashLink>
        </main>
    </nav>
      
    </>
  )
}

export default Header;