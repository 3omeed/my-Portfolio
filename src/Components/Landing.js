import   './LandingStyle.css';
// import photo from '../assets/work-photos/IMG_02.jpg';
import photo from '../assets/work-photos/Profile_Photo_NEW.jpg';
// import { useEffect, useState } from 'react';
// import { Motion, spring } from 'react-motion';

function Landing(isNightMode) {

  // const [scrollPos, setScrollPos] = useState(0);
  // const [animate, setAnimate] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPos(window.scrollY);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  // useEffect(() => {
  //   if (scrollPos > 500) {
  //     setAnimate(true);
  //   } else {
  //     setAnimate(false);
  //   }
  // }, [scrollPos]);
  return (
    <div className="landing box-section" id="Landing">
      <div className="container-landing">
        {/* <Motion
          defaultStyle={{ x: -200 }}
          style={{
            x: spring(animate ? 1 : 0, {stiffness: 100, damping: 10}),
            
          }}
        > */}
          {/* {(interpolatingStyle) => ( */}
            <div
              className="Text"
              // style={{
              //   transform: `translateX(${interpolatingStyle.x}px)`,
              //   transitionDuration: 1,
              //   transitionDelay: 0.5,
              // }}
            >
              <p className="name">I'm Abdelrahman Emad</p>
              <p className="job">Front-end developer</p>
              <p className="title">
                Passionate front-end developer with a relentless pursuit of
                knowledge. Eager to create seamless user experiences, I embrace
                challenges to continually refine and expand my skills.
              </p>
            </div>
          {/* )} */}
        {/* </Motion> */}
        <a href="#Work" className={`my-Work-btn btn`}>
          My Work
        </a>
      </div>
      <div className="photo-handler">
        <img src={photo} alt="personal-pic" />
      </div>
    </div>
  );
}

export default Landing;
