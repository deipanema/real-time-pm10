import React from 'react';

export default function Header({ headText }) {
  const headerStyle = {
    backgroundImage: `url('/image/brand.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return <header style={headerStyle}></header>;
}
