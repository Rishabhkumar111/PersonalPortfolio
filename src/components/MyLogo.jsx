import React, { useEffect, useState } from "react";
import icon from '../assets/img/MyIcon.svg'

const MyLogo = ({ logo }) => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (screenWidth < 992 && screenWidth > 766) ? (
    <img src={icon} alt="Logo" id="small_logo"/>
  ) : (
    <img src={logo} alt="Logo" id="large_logo"/>
  );
};

export default MyLogo;
