import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <p>
        <span className="bold">Address :</span>Egypt - Cairo
      </p>
      <div>
        <span className="bold">Email :</span>
        <a className="my-mail" href="abdelrahmanemad2712@gmail.com">
          abdelrahmanemad2712@gmail.com
        </a>
      </div>
      <div className='phone'> 
        <p>phone : 01097781054</p>
      </div>
      
    </div>
  );
}

export default Footer;
