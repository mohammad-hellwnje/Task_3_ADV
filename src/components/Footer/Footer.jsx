import React from 'react';
import './Footer.css';

function Footer({ className }) {
  return (
    <div className={`footer ${className}`}>
      <p>Copyright &copy; 2048 Villa Agency Co Ltd. All rights reserved. Design: TemplateMo</p>
    </div>
  )
}

export default Footer;
