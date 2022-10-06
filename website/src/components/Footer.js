import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { Emoji } from './Emoji';

function Footer() {
  return (
    <div className='footer-container'>
      {/*<section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
  </section>*/}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/about'>a bit about me</Link>
            <Link to='#'
              onClick={(e) => {
                window.location.href = 'mailto:annamriley4@gmail.com';
                e.preventDefault();
              }}>reach out</Link>
            <Link to='/favourite'>my favourite things</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              anna marie riley
              <Emoji symbol=" 🤸‍♀️" />
            </Link>
          </div>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://github.com/annariley" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/annariley4/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: 'https://www.linkedin.com/in/annariley4/' }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: 'https://www.strava.com/athletes/68204807' }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-strava' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: 'https://open.spotify.com/user/annariley576?si=a0c4bb07fa784f29' }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-spotify' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='#'
              onClick={(e) => {
                window.location.href = 'mailto:annamriley4@gmail.com';
                e.preventDefault();
              }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa fa-envelope' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
