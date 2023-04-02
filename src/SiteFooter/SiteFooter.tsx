import React from 'react';
import './SiteFooter.css';
import '../index.css';

function SiteFooter() {
  return (
    <div className="SiteFooter">
      <p className="Mini">
        © 2022-{new Date().getFullYear()}{' '}
        <a
          href="https://github.com/Girton-JCR/girton-jcr"
          target="_blank"
          rel="noreferrer"
        >
          Girton JCR IT Officer
        </a>
        <br />
        Girton College Website:{' '}
        <a href="https://www.girton.cam.ac.uk" target="_blank" rel="noreferrer">
          www.girton.cam.ac.uk
        </a>
      </p>
    </div>
  );
}

export default SiteFooter;
