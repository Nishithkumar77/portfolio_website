import React from 'react';
import './works.css';
import portfolio1 from '../../assets/portfolio-9.png';
import portfolio2 from '../../assets/portfolio-10.png';
import portfolio3 from '../../assets/portfolio-7.png';
import portfolio4 from '../../assets/portfolio-8.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';



const Works = () => {
  return (
    <div>
      <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and
        provide industry oriented works to client to enhance their business</span>
        <div className='worksImgs'>
            <a href="https://nishithkumar77-customer-churn-prediction-app-p1oekn.streamlit.app/">
              <img  src={portfolio1} alt='Portfolio1' className='worksImg' />
            </a>

            <a href="https://nishithkumar77-crm-nlp--app-t4tecd.streamlit.app/">
              <img src={portfolio2} alt='Portfolio2' className='worksImg' />
            </a>

            <a href="https://www.novypro.com/project/super-store-sales-dashboard-13">
              <img src={portfolio3} alt='Portfolio2' className='worksImg' />
            </a>

            <a href="https://github.com/Nishithkumar77/Blood_bank">
              <img src={portfolio4} alt='Portfolio2' className='worksImg' />
            </a>
            
            <img src={portfolio5} alt='Portfolio5' className='worksImg' />
            <img src={portfolio6} alt='Portfolio6' className='worksImg' />
        
        </div>
        <button className='workBtn'>See More</button>
      </section>
    </div>
  )
}

export default Works;
