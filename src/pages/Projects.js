import React, {Fragment} from 'react';
import {useState} from 'react';
import { projects } from '../data/projects';

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
                    <article className =  'article' key = {id}>
                        <a href = {github} target="_blank" rel="noopenner noreferrer" >
                        <img src = {image} alt={title} height = '450px' width  = '100px'/></a>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </article>
                )
                )}
                </div>
            </section>
        </Fragment>
    )
}

export default Projects