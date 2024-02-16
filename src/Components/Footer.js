import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="personal-data">
        <div>
          <p>
            <span className="bold">Address : </span> Egypt - Cairo
          </p>
        </div>
        <div>
          <p>
            <span className="bold">Email : </span>
            <a className="my-mail" href="mailto:abdelrahmanemad2712@gmail.com">
              abdelrahmanemad2712@gmail.com
            </a>
          </p>
        </div>
        <div className="phone">
          <p>
            <span className="bold">phone : </span> 01097781054
          </p>
        </div>
      </div>
      {/* <h4 className="bold">ITS A PLEASURE..!</h4> */}
    </div>
  );
}

export default Footer;
