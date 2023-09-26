import React, { useRef } from 'react';
import './contact.css';
import Bepec from '../../assets/BEPEC Logo-6.png';
import Microsoft from '../../assets/microsoft.png';
import Adobe from '../../assets/adobe.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import InstagramIcon from '../../assets/instagram.png';
import YoutubeIcon from '../../assets/youtube.png';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oubd0n9', 'template_st96gwn', form.current, '4fR-3dxmyK5YsPtf-7HMU')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent successfully');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div>
      <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'> My clients </h1>
            <p className='clientDesc'>
                I have worked with some great startups and diverse group
                of companies. Some of the notable companies I have worked with includes.
            </p>
            <div className='clientImgs'>
                <img src={Bepec} alt='Bepec' className='clientImg' />
                <img src={Microsoft} alt='Microsoft' className='clientImg' />
                <img src={Adobe} alt='Adobe' className='clientImg' />
                <img src={Facebook} alt='Facebook' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
            <h2 className='contactPageTitle'>Contact Me </h2>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name' />
                <input type='email' className='email' placeholder='Your Email' name='your_email' />
                <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='FacebookIcon' className='link' />
                    <img src={TwitterIcon} alt='TwitterIcon' className='link' />
                    <img src={InstagramIcon} alt='InstagramIcon' className='link' />
                    <img src={YoutubeIcon} alt='YoutubeIcon' className='link' />
                </div>
            </form>
        </div>
      </section>
    </div>
  )
}

export default Contact;
