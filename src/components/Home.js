import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
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
            </div>
        </section>
    )
}
 
export default Home

