import React from 'react'
import './Contact.css'
import msg_icon from '../../Assets/msg-icon.png'
import phone_icon from '../../Assets/phone-icon.png'
import location_icon from '../../Assets/location-icon.png'
import mail_icon from '../../Assets/mail-icon.png'
import white_arrow from '../../Assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "60857e28-1640-473d-9df0-3a552de732ae");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
            console.log("Success", data);
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
  
    return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>
                If you have any questions or need further information, feel free to reach out to us. We are here to help you with all your inquiries and provide the support you need.
            </p>
            <ul>
                <li>
                    <img src={mail_icon} alt="" /> contact @edusity.com
                </li>
                <li>
                    <img src={phone_icon} alt="" /> +1 234 567 890
                </li>
                <li>
                    <img src={location_icon} alt="" /> 123 Education St, Learning City, USA
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact