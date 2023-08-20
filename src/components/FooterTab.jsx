import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterTab() {
  return (
    <nav className='footer-container'>
      <Link className='footer-item' to='/neighborhoods' aria-label='우리 동네'>
        <span className='material-icons' aria-hidden='true'>
          account_circle
        </span>
        <span className='font-jua'>우리 동네</span>
      </Link>
      <Link className='footer-item' to='/' aria-label='동네별'>
        <span className='material-icons' aria-hidden='true'>
          language
        </span>
        <span className='font-jua'>동네별</span>
      </Link>
      <Link className='footer-item' to='/bookmark' aria-label='즐겨찾기'>
        <span className='material-icons' aria-hidden='true'>
          bookmarks
        </span>
        <span className='font-jua'>즐겨찾기</span>
      </Link>
    </nav>
  );
}
