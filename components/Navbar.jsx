import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import Link from 'next/link'
import { motion } from 'framer-motion'



const Navbar = () => {

    const fadeIn = (direction, type, delay, duration) => ({
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    });


    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };
    return (
        <nav className='navbar_container'>
            <Link className='icon_link' href="/">
                <h1 className='logo_nav'>mango.</h1>
            </Link>
            <div onClick={handleNav} className='navbar_icon'>{nav ? <AiOutlineClose /> : <AiOutlineMenu />} </div>
            <div className={nav ? 'navbar_closed' : 'navbar_open'}>
                <ul>
                    <Link href='/'>
                        <motion.li variants={fadeIn('', 'tween', 0.2, 0.6)} className='nav_link' initial='hidden' whileInView='show' onClick={() => handleNav(!nav)}>HOME</motion.li>
                    </Link>
                    <Link href='/Packages'>
                        <motion.li variants={fadeIn('', 'tween', 0.4, 0.6)} className='nav_link' initial='hidden' whileInView='show' onClick={() => handleNav(!nav)}>PACKAGES</motion.li>
                    </Link>
                    <Link href='/Products'>
                        <motion.li variants={fadeIn('', 'tween', 0.6, 0.6)} className='nav_link' initial='hidden' whileInView='show' onClick={() => handleNav(!nav)}>SERVICES</motion.li>
                    </Link>
                    <Link href='/Contact'>
                        <motion.li variants={fadeIn('', 'tween', 0.8, 0.6)} className='nav_link' initial='hidden' whileInView='show' onClick={() => handleNav(!nav)}>CONTACT</motion.li>
                    </Link>
                    <Link href='/'>
                        <motion.li variants={fadeIn('', 'tween', 1, 0.6)} className='nav_link' initial='hidden' whileInView='show' onClick={() => handleNav(!nav)}>LOCATIONS</motion.li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar