import React from 'react'
import { motion } from 'framer-motion'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail } from 'react-icons/ai'

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

const ContactContents = () => {
    return (
        <section className='contact_container'>
            <div className='contact_content-container'>
                <div className='contact_text-container'>
                    <p>
                        Let's get to know your <span>pride and joy.</span>
                    </p>
                    <div className='contact_mail'>
                        <AiOutlineMail className='contact_icon' />
                        <p>
                            Send us an email of give us a call if you'd like to know more about what we have to offer.
                        </p>
                    </div>
                </div>
                <div className='contact_details'>
                    <div className='contact_icons'>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><AiOutlineInstagram className='contact_icon-main' /></motion.a>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><AiOutlineFacebook className='contact_icon-main' /></motion.a>
                    </div>
                    <motion.p variants={fadeIn('up', 'spring', 0.3, .6)} initial='hidden' whileInView='show'>Michael Blades</motion.p>
                    <motion.p variants={fadeIn('up', 'spring', 0.5, .6)} initial='hidden' whileInView='show'>04** *** ***</motion.p>
                    <motion.p variants={fadeIn('up', 'spring', 0.7, .6)} initial='hidden' whileInView='show'>michael@mango.com.au</motion.p>
                </div>
            </div>
        </section>
    )
}

export default ContactContents