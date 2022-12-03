import React from 'react'
import "../../style/testimonial.css"

import Slider from "react-slick";
import ava01 from "../../images/ava-1.jpg"
import ava02 from "../../images/ava-2.jpg"
import ava03 from "../../images/ava-3.jpg"


const Testinomial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    return (
        <section>
            <div className="container">
                <div className="slider_content-top">
                    <h6 className="subtitle">Testimonial</h6>
                    <h2>Trusted by more than <span className="highlight">3,000 Customer</span></h2>
                </div>
                <div className="slider_wrapper">
                    <Slider {...settings}>
                        <div className="slider_item">
                            <p className="description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus autem, sed adipisci non labore pariatur quia consequatur ea, repudiandae
                                repellendus ipsam! Sint itaque placeat nostrum cupiditate incidunt odit a at.
                                Repudiandae sapiente quod voluptas officia accusamus
                                excepturi omnis quo, quae
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava01} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer_name">Jhoony Deep</h5>
                                    <p className="description">CEO, KingsMan Co</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider_item">
                            <p className="description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus autem, sed adipisci non labore pariatur quia consequatur ea, repudiandae
                                repellendus ipsam! Sint itaque placeat nostrum cupiditate incidunt odit a at.
                                Repudiandae sapiente quod voluptas officia accusamus
                                excepturi omnis quo, quae
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava02} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer_name">Kim Kindreson</h5>
                                    <p className="description">Sr. Developer, Nikoshi</p>
                                </div>
                            </div>
                        </div>
                        <div className="slider_item">
                            <p className="description">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Delectus autem, sed adipisci non labore pariatur quia consequatur ea, repudiandae
                                repellendus ipsam! Sint itaque placeat nostrum cupiditate incidunt odit a at.
                                Repudiandae sapiente quod voluptas officia accusamus
                                excepturi omnis quo, quae
                            </p>
                            <div className="customer_details">
                                <div className="customer_img">
                                    <img src={ava03} alt="" />
                                </div>

                                <div>
                                    <h5 className="customer_name">Derry Chen</h5>
                                    <p className="description">Founder, PhotoLime</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testinomial