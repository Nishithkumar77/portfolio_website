import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='Intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Nishith</span> <br />Software Developer Engineer</span>
            <p className='intoPara'>Experienced Data Scientist with a strong foundation in data analysis, machine learning, <br /> and problem-solving. 
            Eager to leverage my analytical skills and programming proficiency <br /> to excel in a Software Developer role. 
            Adept at translating complex data-driven insights<br /> into practical solutions and now keen to apply my passion for coding and<br /> software development to create robust applications.
            </p>
            <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' /> Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro;
