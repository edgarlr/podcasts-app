import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import { MdKeyboardArrowLeft } from 'react-icons/md';
import { colors } from 'styles/theme';

const Navbar = ({ headerText = null, backBtn = false }) => {
  const [fixedNav, setFixedNav] = useState(false)

  const fixNavigation = () => { 
    if (window.scrollY > 80) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', fixNavigation);
    return () => {
      window.removeEventListener('scroll', fixNavigation)
    }
  }, [])
  return (
    <header>
      {backBtn && (
        <Link href={'/'}>
          <a>
            <MdKeyboardArrowLeft size='2rem' />
          </a>
        </Link>
      )}
      
      <h2 className={`${fixedNav ? 'show' : ''}`}>{headerText}</h2>
      
      <style jsx>{`
        header {
          background: ${colors.white};
        }
      `}</style>

      <style jsx>{`
        header {
          z-index: 1;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 3rem;
          padding: 1rem 1.5rem 0;
        }
        a {
          display: flex;
          align-items: center;
          position: absolute;
          left: 1.5rem;
        }
        h2 {
          margin: 0;
          font-size: 1.2rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          max-width: 55%;
          opacity: 0;
          transform: translateY(5px);
          transition: .2s;
        }
        h2.show {
          opacity: 1;
          transform: translateY(0)
        }
      `}</style>
    </header>
  )
}

export default Navbar
