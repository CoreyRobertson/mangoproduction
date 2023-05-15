import React from 'react'
import { motion } from 'framer-motion'

const Packages = () => {

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {

                staggerChildren: 0.3,
                delayChildren: 0.2,
            },
        },
    }

    const itemA = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 1,
            }
        },
    }

    return (
        <section className='packages_container'>
            <motion.div variants={container} initial='hidden' whileInView='show' className='packages_card-container'>
                <motion.div variants={itemA} className='packages_card'>
                    <div className='card_image-container1' />
                    <div className='card_content-container'>
                        <div className='card_header-container'>
                            <h2>SILVER</h2>
                            <p>Budget Friendly</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type='button'>Enquire Now!</button>
                    </div>
                </motion.div>
                <motion.div variants={itemA} className='packages_card'>
                    <div className='card_image-container2' />
                    <div className='card_content-container'>
                        <div className='card_header-container'>
                            <h2>GOLD</h2>
                            <p>Most Popular</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type='button'>Enquire Now!</button>
                    </div>
                </motion.div>
                <motion.div variants={itemA} className='packages_card'>
                    <div className='card_image-container3' />
                    <div className='card_content-container'>
                        <div className='card_header-container'>
                            <h2>PLATINUM</h2>
                            <p>Premium</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button type='button'>Enquire Now!</button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Packages