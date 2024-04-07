import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container' id='home'>
        <div className='hero-content'>
            <h3>Hi, I am</h3>
            <h2>Gaurav Singh</h2>

            <p>A Passionate Full Stack Web Developer, <br/> Trying to Learn and Build Smart User Interfaces, Developing Web applications and Resolve Web Experiences.  </p>
                 <h6>Bengaluru, India</h6>
                 <h6>gaurav.shubham476@gmail.com</h6>
                 <h6>+91 9714625991</h6>
        </div>

        <div className='hero-img'>
             
                <img src="https://tse1.mm.bing.net/th?id=OIP.aD3SqchEX6oHOREGbDqe0AHaE7&pid=Api&P=0&h=180" alt="" />
                

            
            {/* <div>
                <div className='tech-icon'>
                    <img src="portfolio\src\Images\icons8-java-48.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="portfolio\src\Images\icons8-react-js-16.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="portfolio\src\Images\icons8-javascript-48.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="portfolio\src\Images\icons8-spring-boot-48.png" alt="" />
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Hero
