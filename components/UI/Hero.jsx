import React from 'react'
import "../../style/hero.css"

import heroDarkImg from "../../images/hero-img.png"

const Hero = () => {
    return (
        <section className="hero_section">
            <div className="container">
                <div className="hero_wrapper">
                    <div className="hero_content">
                        <div>
                            <h2>We're Cretaing Perfact</h2>
                            <h2>Digital Products</h2>
                            <h2 className="highlight">Promote Your Brand</h2>
                        </div>
                        <p className='description'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Debitis doloribus reiciendis modi velit vitae non quae dolores
                            ullam dolorem autem.
                        </p>
                        <div className="hero_btns">
                            <button className="primary_btn">Get Strated Now</button>
                            <button className="secondary_btn">Discover More</button>
                        </div>
                    </div>

                    <div className="hero_img">
                        <img src={heroDarkImg} alt="hero-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero