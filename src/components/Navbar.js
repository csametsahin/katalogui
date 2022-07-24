import { AppBar, Box, IconButton, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from '@mui/material';
import { useState, useEffect } from 'react';
import './Navbar.scss';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false)

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  const data = [{
    name: 'Katalog'
  }]
  return (
    <div>
      {isMobile &&
          <nav className="mobile-bottom-nav">
          <div className="mobile-bottom-nav__item mobile-bottom-nav__item--active">
            <div className="mobile-bottom-nav__item-content">
              <i className="material-icons">home</i>
              one
            </div>		
          </div>
          <div className="mobile-bottom-nav__item">		
            <div className="mobile-bottom-nav__item-content">
              <i className="material-icons">mail</i>
              two
            </div>
          </div>
          <div className="mobile-bottom-nav__item">
            <div className="mobile-bottom-nav__item-content">
              <i className="material-icons">person</i>
              three
            </div>		
          </div>
          <div className="mobile-bottom-nav__item">
            <div className="mobile-bottom-nav__item-content">
              <i className="material-icons">phone</i>
              four
            </div>		
          </div>
        </nav>
}
    </div>



  )
}
