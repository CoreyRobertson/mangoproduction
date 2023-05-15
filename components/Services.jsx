import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {




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

    const itemB = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
    }

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
        <section className='services_container'>
            <div className='services_content-container'>
                <div className='services_card'>
                    <h2>MOBILE CAR DETAILING</h2>
                    <motion.div variants={container} initial='hidden' whileInView='show' className='services_card-content_container'>
                        <motion.p variants={itemA}>Are you tired of spending your weekends at the car wash? Let our mobile detailing service do the work for you! We use only the best products to give your car a showroom-like shine, right in your driveway. With our convenient mobile service, you can save time and money while ensuring the highest quality care for your vehicle. Get a professional cleaning experience with our mobile car detailing service today!</motion.p>
                        <motion.button variants={fadeIn('up', 'tween', 0.3, 0.5)} initial='hidden' whileInView='show' type='button'>
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
                <div className='services_card'>
                    <h2>INTERIOR CLEANING</h2>
                    <motion.div variants={container} initial='hidden' whileInView='show' className='services_card-content_container'>
                        <motion.p variants={itemA}>Get your car's cabin looking showroom-new with interior cleaning. With our comprehensive packages, you can experience a full interior cleaning, polishing and protection for your vehicle. We will bring back the sparkle to your car's interior and help protect it from future wear and tear. Enjoy a clean, hygienic and fresh-smelling car interior with our interior cleaning services!</motion.p>
                        <motion.button variants={fadeIn('up', 'tween', 0.3, 0.5)} initial='hidden' whileInView='show'>
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
                <div className='services_card'>
                    <h2>PRE-SALE PREPARATION</h2>
                    <motion.div variants={container} initial='hidden' whileInView='show' className='services_card-content_container'>
                        <motion.p variants={itemA}>Get the most out of your car sale with Pre-Sale Detailing! Our professional cleaning service will make sure your car looks its best when you put it up for sale. We'll provide a thorough and comprehensive detailing of the exterior and interior of your vehicle, helping to secure the highest possible price. With Pre-sale Detailing, you can have peace of mind knowing your car will look its best when buyers come to take a look.</motion.p>
                        <motion.button variants={fadeIn('up', 'tween', 0.3, 0.5)} initial='hidden' whileInView='show'>
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Services