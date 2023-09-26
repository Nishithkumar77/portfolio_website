import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>I am a certified Data Scientist and a web designer. I have experitize in design model building using different algorithm</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Data Scientist</h2>
                    <p>This is a demo text</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Web Developer</h2>
                    <p>This is a demo</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>App Design</h2>
                    <p>This is a demo</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills;
