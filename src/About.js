import React from 'react';
import './css/index.css';

function About() {
  return (
    <div className='About'>
      <div className='info'>
        <h1>Neon Polygon</h1>
        <p>
          Neon Polygon is the music project of Seattle-based synthesist and
          producer <a href='http://davidhrivnak.com/'>David Hrivnak</a>. Fans of
          The Chemical Brothers, Boards of Canada, and Beck will appreciate Neon
          Polygon's warm retro electronic sound. Made with psychedelics and
          love, the music is ripe with vintage synths, acoustic elements, and a
          full platter of auditory treats for those who take a listen.
        </p>
        <p>
          Booking:{' '}
          <a href='mailto:neonpolygonmusic@gmail.com'>
            neonpolygonmusic@gmail.com
          </a>
        </p>
        <div style={{ maxWidth: '500px' }}>
          <iframe
            title='soundcloud - Neon Polygon'
            width='100%'
            height='300'
            scrolling='no'
            frameborder='no'
            allow='autoplay'
            src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/280528349&color=%2368888c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          ></iframe>
        </div>
        <div className='buzzbtns'>Site by <a href='http://adriennekerr.com'>BUZZBTNS</a></div>
      </div>
    </div>
  );
}

export default About;
