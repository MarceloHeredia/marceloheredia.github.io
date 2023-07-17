import React from 'react';

import { PageBase } from '../components/page-base';

class About extends React.Component {
  render() {
    return (
      <PageBase>
        <h2>About Page</h2>
        <div>
          <p>This section contains information about...</p>
        </div>
      </PageBase>
    );
  }
}

export default About;