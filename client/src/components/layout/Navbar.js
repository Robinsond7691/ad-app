import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styleLink = {
    color: 'black',
    fontFamily: 'Monospace',
  };

  return (
    <div className='ui menu'>
      <div className='ui container'>
        <div className='header item'>
          <Link to='/' style={styleLink}>
            <h2>
              <i className='newspaper outline icon'></i>
              LOCAL ADS
            </h2>
          </Link>
        </div>
        <div className='link item'>
          <Link to='/about' style={styleLink}>
            About
          </Link>
        </div>
        <div className='right menu'>
          <div className='link item'>
            <Link to='/#' style={styleLink}>
              Post
            </Link>
          </div>
          <div className='link item'>
            <Link to='/#' style={styleLink}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
