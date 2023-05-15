import React from 'react'

const Form = () => {
    return (
        <section className='form_container'>
            <div className='form_bg' />
            <div className='form_content-container'>
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Phone Number' />
                    <input type='text' placeholder='Email' />
                    <textarea placeholder='Your desired services' />
                    <button type='submit'>Submit</button>
                </form>
                <div className='form_text-container'>
                    <h2>FOR A HASSLE FREE QUOTE</h2>
                    <p>Tell us about yourself and your vehicle and we will get back to you with a competitive quote</p>
                </div>
            </div>
        </section>
    )
}

export default Form