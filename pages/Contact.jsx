import Form from '@/components/Form'
import Locations from '@/components/Locations'
import ContactContents from '@/components/ContactContents'

import React from 'react'

const Contact = () => {
    return (
        <page>
            <ContactContents />
            <Locations />
            <Form />
        </page>
    )
}

export default Contact