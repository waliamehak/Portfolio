import React, {Fragment} from 'react';
import {useState} from 'react';
import { projects } from '../data/projects';
import {FaGithub} from 'react-icons/fa'
import {CgWebsite} from 'react-icons/cg'

const Projects = () => {
    //eslint-disable-next-line
    const [cards, setCards] = useState (projects)
    return (
        <Fragment>
            <section className='projects'>
                <h1>Projects</h1>

                <div className='cards'>
                {cards.map(({id, title, desc, github, demo, image})=>
                (
                    <article key = {id}>
                        <img src = {image} alt={title} height = '400px' wight  = '200px'/>
                        <h4>{title}</h4>
                        <p>desc</p>
                        <ul>
                            <li><a 
                            href= {github} 
                            target="_blank" rel="noopenner noreferrer" 
                            className="github"><FaGithub style= {{marginRight: 5}}/>Github</a></li>
                            <li><a 
                            href= {demo} 
                            target="_blank" rel="noopenner noreferrer" 
                            className="demo"><CgWebsite style = {{ marginRight: 5}}/>Demo</a></li>
                        </ul>
                    </article>
                )
                )}
                </div>
            </section>
        </Fragment>
    )
}

export default Projects