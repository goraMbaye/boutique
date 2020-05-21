import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {FaCartArrowDown} from 'react-icons/fa';
import imagelogo from '../images/logo.jpg';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
             <Link to="/">
              <img src={imagelogo} alt="store"width="50px" className="navbar-brand"/>
             </Link>
             <ul className="navbar-nav align-items-center">
                 <li className="nav-item ml-4">
                     <Link to="/" className="nav-link" >
                         Product
                     </Link>
                 </li>
             </ul>
             <Link to="/cart" className="ml-auto">
              <ButtonContainer>
                 <span className="mr-2">
                <FaCartArrowDown />
                </span> 
                my Cart

              </ButtonContainer>   
             </Link>
           </NavWrapper>
        )
    }
}
const NavWrapper=styled.nav`
 background:var(--mainBlue);
 .nav-link{
   color:var(--mainWhite) !important;
   font-size:1.3rem;
   text-transform:capitalize;  
 }
`
;
