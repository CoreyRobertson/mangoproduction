import React from 'react'
import Map from './Map'

const Locations = () => {

    const address = '16 Sierra Blvd, Cranbourne North, Victoria'
    return (


        <section className='locations_container'>
            <div className='locations_bg' />
            <div className='locations_text-container'>
                <h2>THE LOCATIONS <span>WE SERVICE</span></h2>
                <ul>
                    <li>Berwick</li>
                    <li>Cranbourne</li>
                    <li>Lyndhurst</li>
                    <li>Dandenong</li>
                    <li>Carrum Downs</li>
                    <li>Skye</li>
                    <li>Bayside</li>
                </ul>
            </div>
            <div className='locations_map'>
                <Map address={address} />
            </div>
        </section>
    )
}

export default Locations