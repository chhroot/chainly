import React from 'react';
import backgroundImage1 from '../assets/stars1.png';
import backgroundImage2 from '../assets/stars2.png';
import logoImage from '../assets/logo.png';

const Home = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})`,
    backgroundSize: 'auto, auto',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundPosition: 'left top, right top',
  };

  const textShadowStyle = {
    textShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    WebkitTextFillColor: 'transparent',
    WebkitBackgroundClip: 'text',
    backgroundImage: 'linear-gradient(white , white, grey, black)', // Half white at the bottom
  };



  return (
    <div className="relative">
      <img
        src={logoImage}
        alt="Logo"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-96 w-96"
        style={{ zIndex: 2, top: '-100px' }}
      />
      <div
        className="absolute top-0 left-0 w-full h-1/2"
        style={{ ...backgroundStyles }}
      ></div>
      <div className="flex justify-center items-center">
        <div className="max-w-8xl text-center mt-60">
          <h1 className="text-white font-gilroy text-7xl">
            MARKETING SERVICES
            <br />
            FOR DECENTRALIZED
            <br />
            <span style={textShadowStyle}>JOURNEY</span>
          </h1>
        </div>

        
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
};

export default Home;
