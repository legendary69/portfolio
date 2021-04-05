import React from 'react'
import about from '../img/about.jpg'

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Singh Anshuman</span></h4>
                <p className="about-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Languages</p>
                    </div>
                    <div className="right-section">
                        <p className="p-margin-left">: Lorem Ipsum</p>
                        <p className="p-margin-left">: 22</p>
                        <p className="p-margin-left">: Indian</p>
                        <p className="p-margin-left">: English, Hindi, Gujarati</p>
                        <p className="p-margin-left">: Surat, Gujarat, India - 395004</p>
                        <p className="p-margin-left">: English, Hindi, Gujarati</p>
                    </div>
                </div>
                <button className="btn">Download CV</button>
            </div>
        </div>
    )
}

export default ImageSection
