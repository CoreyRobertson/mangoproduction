import React from 'react'
import Form from '@/components/Form'

const PackagesPage = () => {
    return (
        <page>
            <section className='package_page-container'>
                <div className='package_page-background' />
                <h2>MOBILE CAR CLEANING <span>PACKAGES</span></h2>
                <div className='package_page-card_container'>
                    <div className='package_page-card'>
                        <div className='package_card-number'>
                            <p>1</p>
                        </div>
                        <div className='package_card-content_container'>
                            <h3>SILVER</h3>
                            <p>Body, Wheels, Door Jams, Chamois ,Vacuum Interior & Rear Interior & Exterior Glass, Tyre Shine, Deodorise, Leather and/or Vinyl protection, console & Dash</p>
                            <ul>
                                <li>Small, Medium & large cars - $132.00</li>
                                <li>Mid SUV & 2 Door Utes - $154.00</li>
                                <li>Large SUV & 4 Door Utes - $176.00</li>
                                <li>Off Road Vehicles & Large Vans - $198.00</li>
                            </ul>

                        </div>
                        <button>BOOK NOW</button>
                    </div>
                    <div className='package_page-card'>
                        <div className='package_card-number'>
                            <p>2</p>
                        </div>
                        <div className='package_card-content_container'>
                            <h3>GOLD</h3>
                            <p>Body, Wheels, Door Jams, Chamois ,Vacuum Interior & Rear Interior & Exterior Glass, Tyre Shine, Deodorise, Leather and/or Vinyl protection, console & Dash Wax & Polish

                            </p>
                            <ul>
                                <li>Small, Medium & large cars - $198.00</li>
                                <li>Mid SUV & 2 Door Utes - $220.00</li>
                                <li>Large SUV & 4 Door Utes - $242.00</li>
                                <li>Off Road Vehicles & Large Vans - $264.00</li>
                            </ul>

                        </div>
                        <button>BOOK NOW</button>
                    </div>
                    <div className='package_page-card'>
                        <div className='package_card-number'>
                            <p>3</p>
                        </div>
                        <div className='package_card-content_container'>
                            <h3>PLATINUM</h3>
                            <p>Body, Wheels, Door Jams, Chamois ,Vacuum Interior & Rear Interior & Exterior Glass, Tyre Shine, Deodorise, Leather and/or Vinyl protection, console & Dash Wax & Polish ,Clay Bar or Electric Buff</p>
                            <ul>
                                <li>Small, Medium & large cars - $264.00</li>
                                <li>Mid SUV & 2 Door Utes - $286.00</li>
                                <li>Large SUV & 4 Door Utes - $308.00</li>
                                <li>Off Road Vehicles & Large Vans - $330.00</li>
                            </ul>

                        </div>
                        <button>BOOK NOW</button>
                    </div>
                    <div className='package_page-card'>
                        <div className='package_card-number'>
                            <p>4</p>
                        </div>
                        <div className='package_card-content_container'>
                            <h3>SILVER</h3>
                            <p>Body, Wheels, Door Jams, Chamois ,Vacuum Interior & Rear Interior & Exterior Glass, Tyre Shine, Deodorise, Leather and/or Vinyl protection, console & Dash</p>
                            <ul>
                                <li>Small, Medium & large cars - $132.00</li>
                                <li>Mid SUV & 2 Door Utes - $154.00</li>
                                <li>Large SUV & 4 Door Utes - $176.00</li>
                                <li>Off Road Vehicles & Large Vans - $198.00</li>
                            </ul>

                        </div>
                        <button>BOOK NOW</button>
                    </div>
                </div>
            </section>
            <Form />
        </page>
    )
}

export default PackagesPage