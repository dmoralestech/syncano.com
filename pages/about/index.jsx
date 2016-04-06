import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

export default () => (
  <DocumentTitle title="About">
    <div>
      <h2>About</h2>
      <Link to="/">Back to Home</Link>
    </div>
  </DocumentTitle>
);