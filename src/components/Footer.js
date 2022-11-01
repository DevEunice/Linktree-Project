import React from 'react'
import logo from '../images/I4G.svg';
import zuri from '../images/Zuri_Logo.svg';
import { FooterStyle, FooterTextStyle, FooterWrapperStyle } from './FooterStyle';

function Footer() {
  return (
    <FooterWrapperStyle>
    <FooterStyle>
       <img src={zuri} alt="Zuri_logo"  />
       <FooterTextStyle>HNG internship 9 Frontend Task</FooterTextStyle>
       <img src={logo} alt="I4G"  /> 
    </FooterStyle>
    </FooterWrapperStyle>
  )
}

export default Footer