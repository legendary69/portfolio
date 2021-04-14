import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.9887024127415!2d72.83596471470264!3d21.232296585888406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec36a740f6f%3A0x68f893629b170c23!2sGajera%20Vidyabhavan%20Katargam!5e0!3m2!1sen!2sin!4v1618376991002!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" />
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 8347613458'} text2={'+91 9313580699'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'anshumansingh758@gmail.com'} text2={'anshumanlbtechhub@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'1, Gajera Vidyabhavan, Katargam, Surat, Gujarat-395004'} text2={'India'} title={'Address'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
