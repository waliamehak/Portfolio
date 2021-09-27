import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import styled from 'styled-components'
import {SiLeetcode} from 'react-icons/si'

const Button = styled.button`
background-color: #00b594e6;
color: white;
border-radius: 8px;
outline: 0;
text-size: 20px;
padding: 10px 20px;
margin-top: 24px;
`
const Home = () => {
    return (
        <section className="home">
            <div className="overlay">
                <h1>Mehak Walia</h1>
                <p>A recent graduate with a passion for solving problems and learning new things.</p>
                <ul>
                    <li>
                        <a href='https://leetcode.com/mehakwaliac' target = "_blank" rel="noopener noreferrer"><SiLeetcode/></a>
                    </li>
                    <li>
                        <a href='https://linkedin.com/in/mehakwalia21' target = "_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    </li>
                    <li>
                        <a href='https://github.com/waliamehak' target = "_blank" rel="noopener noreferrer"><FaGithub/></a>
                    </li>
                </ul>
                <a href= {require('../Resume.pdf').default} download>
                   <u>Download Resume</u> 
                </a>
            </div>
        </section>
    )
}
 
export default Home

