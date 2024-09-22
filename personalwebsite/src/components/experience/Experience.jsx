import React from 'react'
import "./experience.css";

const Experience = () => {
  return (
    <section className="experience section" id="experience">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">Where I've worked</span>

        <div className="experience__container container grid">
            <div className="experience__content">
                <div>
                    <i className="uil uil-web-grid experience__icon"></i>
                    <h3 className="experience__title">
                        Educational Technology Intern
                    </h3>
                </div>

                <span className="experience__button">View More <i className="uil uil-arrow-right experience__button-icon"></i></span>

                <div className="experience__modal">
                    <div className="experience__modal-content">
                        <i className="uil uil-times experience__modal-close"></i>

                        <h3 className="experience__modal-title">Product Designer</h3>
                        <p className="experience__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="experience__modal-experience grid">
                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I develop the user interface</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">Web page development</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I create UX element interaction</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I position your company brand</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">Design and mockups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experience__content">
                <div>
                    <i className="uil uil-arrow experience__icon"></i>
                    <h3 className="experience__title">Queen's Cybersecurity Cryptography Club <br /> Vice President</h3>
                </div>

                <span className="experience__button">View More <i className="uil uil-arrow-right experience__button-icon"></i></span>

                <div className="experience__modal">
                    <div className="experience__modal-content">
                        <i className="uil uil-times experience__modal-close"></i>

                        <h3 className="experience__modal-title">Ui/Ux Design</h3>
                        <p className="experience__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="experience__modal-experience grid">
                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I develop the user interface</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">Web page development</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I create UX element interaction</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I position your company brand</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">Design and mockups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="experience__content">
                <div>
                    <i className="uil uil-edit experience__icon"></i>
                    <h3 className="experience__title">Project Lead <br /> Queen's Web Dev</h3>
                </div>

                <span className="experience__button">View More <i className="uil uil-arrow-right experience__button-icon"></i></span>

                <div className="experience__modal">
                    <div className="experience__modal-content">
                        <i className="uil uil-times experience__modal-close"></i>

                        <h3 className="experience__modal-title">Visual Designer</h3>
                        <p className="experience__modal-description">Service with more than 3 years of experience. Providing quality work to clients and companies.</p>

                        <ul className="experience__modal-experience grid">
                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I develop the user interface</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">Web page development</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I create UX element interaction</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">I position your company brand</p>
                            </li>

                            <li className="experience__modal-experience">
                                <i className="uil uil-check-circle experience__modal-icon"></i>
                                <p className="experience__modal-info">Design and mockups of products for companies</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience