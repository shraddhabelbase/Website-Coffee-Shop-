import React from 'react'
import { Nav, NavLink, NavIcon, Bars} from './NavbarElements';
const Navbar = ({toogle}) => {
    return (
        <>
        <Nav>
        <NavLink to ='/'>Smoothie. Acai Bowl. Juice</NavLink>
        <NavIcon onClick={toogle}>
        <p>Menu</p>
        <Bars />
        </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar;
