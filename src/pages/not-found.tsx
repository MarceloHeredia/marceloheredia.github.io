import React from 'react';

import { PageBase } from '../components/page-base';

function NotFound() {
  return (
    <PageBase padding={0}>
      <img src={'https://http.cat/404.jpg'} alt='Page Not Found' style={{ objectFit: 'fill', height: '100%', width: '100%' }}/>
    </PageBase>
  );
}

export default NotFound;
