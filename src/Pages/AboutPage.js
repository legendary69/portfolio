import React from 'react'
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import ServiceSection from '../Components/ServiceSection'
import design from '../img/design.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'javascript'} progress={'50%'} width={'50%'} />
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServiceSection image={design} title={'Web Designer'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat.'} />
                <ServiceSection image={design} title={'Web Designer'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat.'} />
                <ServiceSection image={design} title={'Web Designer'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, repellat.'} />
            </div>
        </div>
    )
}

export default AboutPage
