import React from 'react'

import "../../style/about.css"
import aboutImg from "../../images/about-us.jpg"

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, non Lorem ipsum dolor sit amet consectetur.'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, non Lorem ipsum dolor sit amet consectetur.'
    },
    {
        icon: 'ri-customer-service-line',
        title: '24/7 Hours Support',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, non Lorem ipsum dolor sit amet consectetur.'
    },
]

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about_wrapper">
                    <div className="about_content">
                        <h6 className='subtitle'>Why choose us</h6>
                        <h2>Specialist in aviding on</h2>
                        <h2 className="highlight">financial challenges</h2>
                        <p className='description about_content-desc'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Corporis repellat quibusdam ipsam,
                            pariatur commodi soluta officiis ex quidem eveniet esse,
                            saepe explicabo nulla iusto consequatur!
                        </p>
                        <div className='choose_item-wrapper'>
                            {
                                chooseData.map((item, index) => (
                                    <div className="choose_us-item" key={index}>
                                        <span className="choose_us-icon"><i class={item.icon}></i></span>
                                        <div>
                                            <h4 className="choose_us-title">
                                                {item.title}
                                            </h4>
                                            <p className="description">{item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="about_img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
