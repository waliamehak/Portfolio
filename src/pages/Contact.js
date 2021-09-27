import React, { Fragment } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
const Contact = () => {
    return (
        <Fragment>
            <section className = 'contact'>
            <h1>Contact Me</h1>
                <ul>
                    <li>
                        <a href = "tel: 3065404379"> <FaPhone style= {{marginRight: 10}}/> +1 306-540-4379</a>
                    </li>
                    <li>
                        <a href = "mailto: waliamehakjeet@gmail.com"> <FaEnvelope style= {{marginRight: 10}}/> waliamehakjeet@gmail.com</a>
                    </li>
                </ul>
            </section>
        </Fragment>
    )
}

export default Contact
