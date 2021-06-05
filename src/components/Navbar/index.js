import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo ,MobileIcon, NavMenu, NavItem, NavLinks, NavBtn,NavBtnLink} from './NavbarElement'

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
           <NavbarContainer>
               <NavLogo>STRIVE</NavLogo>
               <MobileIcon onClick={toggle}>
                   <FaBars />

               </MobileIcon>
               <NavMenu>
         
               </NavMenu>
               <NavBtn>
                   <NavBtnLink >Sign In</NavBtnLink>
               </NavBtn>
               </NavbarContainer> 
        </Nav>
        </>
    )
}

export default Navbar
