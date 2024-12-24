import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2dddf913-8a45-4242-a43e-c29bce1cc90b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
        //   console.log("Success", res);
        alert(res.message)
        }
      };
  return (
<div className="contact" id='contact'>
    <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Lets talk</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nihil magnam, qui in deleniti omnis iusto reiciendis autem obcaecati voluptate.</p>
        <div className="contact-details">
            <div className="contact-detail"><img src={mail_icon} alt="" /><p>grajesh2906@gmail.com</p></div>
            <div className="contact-detail"><img src={call_icon} alt="" /><p>+91 7993763103</p></div>
            <div className="contact-detail"><img src={location_icon} alt="" /><p>Andhra Pradesh</p></div>
        </div>
    </div>
<form onSubmit={onSubmit} className='contact-right'>
    <label htmlFor="">Your Name</label>
    <input type="text" placeholder='Enter Your Name' name='name' />
    <label htmlFor="">Your Email </label>
    <input type="email" placeholder='Enter Your Email' name='email' />
    <label htmlFor="">Write your message Here</label>
    <textarea name="message" id="" placeholder='Enter Your Message Here' rows="8"></textarea>
    <button type="submit" className="contact-submit">Submit Now</button>
</form>
    </div>
</div>  )
}

export default contact