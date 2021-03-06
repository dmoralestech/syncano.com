import React from 'react';

export default ({ headline, children, underColumnsContent }) => (
  <div className="features-columns">
    <div className="inner inner--features-columns">
      <h2>{headline}</h2>
      <div className="features-columns__columns">
        {children}
      </div>
      {underColumnsContent && <footer className="features-columns__footer">
        {underColumnsContent}
      </footer>}
    </div>
  </div>
);
