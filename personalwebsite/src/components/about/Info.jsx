import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class="uil uil-graduation-cap"></i>
            
            <h3 className="about__title">Junior</h3>
            <span className="about__subtitle">Queen's University</span>
        </div>

        <div className="about__box">
            <i class="uil uil-desktop"></i>

            <h3 className="about__title">Available</h3>
            <span className="about__subtitle">Seeking Internships</span>
        </div>

        <div className="about__box">
            <i class="uil uil-brain"></i>

            <h3 className="about__title">Learning</h3>
            <span className="about__subtitle">Passionate Explorer</span>
        </div>
    </div>
  )
}

export default Info