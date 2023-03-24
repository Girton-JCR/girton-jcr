import React from 'react';
import './SiteFooter.css';
import '../index.css';

function SiteFooter() {
  return (
    <div className="SiteFooter">
      <p className="Mini">© 2023 Girton JCR IT Officer<br/>
        Girton College Website:{' '}
        <a href="https://www.girton.cam.ac.uk" target="_blank" rel="noreferrer">
          www.girton.cam.ac.uk
        </a>
      </p>
    </div>
  );
}

export default SiteFooter;
