import React from 'react';
import './App.css';
import {useSelector} from "react-redux";

function Footer() {
  const name=useSelector((state)=>state.temp.name);
  return (
    <div className="footer">
      <span>{name}</span>
    </div>
  );
}

export default Footer;
