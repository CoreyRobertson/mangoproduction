import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from 'react-icons/ai'

import { motion } from 'framer-motion'

const Footer = () => {

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

    return (
        <footer className='footer_container'>
            <h1 className='logo'>mango.</h1>
            <div className='footer_list-container'>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
                <div className='footer_icon-container'>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><AiOutlineMail className='footer_icon' /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><AiOutlineInstagram className='footer_icon' /></motion.a>
                    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><AiOutlineFacebook className='footer_icon' /></motion.a>



                </div>
            </div>
            <div className='footer_contact-container'>
                <p>Michael Blades</p>
                <p>04** *** ***</p>
            </div>
        </footer>
    )
}

export default Footer