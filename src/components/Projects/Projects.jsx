import React, { useRef } from 'react'
import "./Projects.css"
import { PROJECTS } from '../../utils/data'
import ProjectCard from './ProjectCard'
import Slider from "react-slick"

const Projects = () => {

    const sliderRef = useRef();

    const settings = {
        dots : false,
        infinite : true,
        speed : 500,
        slidesToShow : 2,
        slidesToScroll : 1,
        arrows : false,
        responsive: [
            {
                breakpoint: 769,
                settings : {
                    slidesToShow : 1,
                    slidesToScroll : 1,
                },
            },
        ],
    }

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }


  return (
    <section className='projects-container' id='projects'>
        <h5>Projects</h5>

        <div className='projects-content'>

            <div className='arrow-right' onClick={slideRight}>
                <span className='material-symbols-outlined'>&#62;</span>
            </div>

            <div className='arrow-left' onClick={slideLeft}>
                <span className='material-symbols-outlined'>&#60;</span>
            </div>

            <Slider ref={sliderRef} {...settings}>
            {PROJECTS.map((item) =>(
                <ProjectCard key={item.title} details={item}/>
            ))}
            </Slider>
        </div>
    </section>
  )
}

export default Projects
