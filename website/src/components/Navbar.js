import React, { useState/*, useEffect */ } from 'react';
//import { Button } from './Button';
import { Emoji } from './Emoji';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  //const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  /*const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);*/

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            anna marie riley
            <Emoji symbol=" 🤸‍♀️" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='/work'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Work
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/play'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Play
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/thoughts'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Thoughts
              </Link>
            </li>
          </ul>
          {/*{button && <Button buttonStyle='btn--outline'>Thoughts</Button>}*/}
        </div >
      </nav >
    </>
  );
}

export default Navbar;
