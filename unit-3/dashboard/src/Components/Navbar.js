import NavbarElement from "./NavbarElement"
import React, { useState } from 'react';

const Navbar = () => {

    const [selected, setSelected] = useState('Dashboard')

    return (
        <div className='navbar'>
            <NavbarElement selected={selected} setSelected={setSelected} title='Dashboard' />
            <NavbarElement selected={selected} setSelected={setSelected} title='Widget' />
            <NavbarElement selected={selected} setSelected={setSelected} title='Reviews' />
            <NavbarElement selected={selected} setSelected={setSelected} title='Customers' />
            <NavbarElement selected={selected} setSelected={setSelected} title='Online Analysis' />
            <NavbarElement selected={selected} setSelected={setSelected} title='Settings' />
        </div>
    )
}

export default Navbar