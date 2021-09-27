import React, { Fragment, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg'
import { Link } from 'react-router-dom'
import { navbar } from '../data/navbar'
const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    //eslint-disable-next-line
    const [links, setLinks] = useState(navbar)
    let classes = 'header';
    if (isOpen) classes += ' open';
    return (
        <Fragment>
            <div className='menu-btn'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <CgMenuGridR />
                </button>
            </div>
            <header className={classes}>
                <nav>
                    <ul>
                    {links.map(({id, title, url}) => {
                            return (
                                <li key={id} onClick= {()=> setIsOpen(false)}>
                                    <Link to={url}>{title}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default Menu
