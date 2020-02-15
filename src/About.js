import React from 'react';
import './css/index.css';

function About() {
  return (
    <div className='About'>
      <div className='info'>
        <h1>Neon Polygon</h1>
        <div>New Album Out Now</div>
        <div style={{ maxWidth: '500px' }}>
          <iframe
            src='https://open.spotify.com/embed/album/5Z8P6VisyXNCmMlyd3bOxc'
            width='300'
            height='380'
            frameborder='0'
            allowtransparency='true'
            allow='encrypted-media'
          ></iframe>
        </div>
        <p>
          Booking:{' '}
          <a href='mailto:neonpolygonmusic@gmail.com'>
            neonpolygonmusic@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
