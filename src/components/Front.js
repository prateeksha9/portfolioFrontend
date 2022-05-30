import React from 'react';
import { Cover, About, WhatDoIDo } from '.';
import Skillicon from './Skillicon';

function Front() {
  return (
    <div className="main">
      <Cover />
      <About />
      <WhatDoIDo />
      <Skillicon />
    </div>
  );
}

export default Front;
