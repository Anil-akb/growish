import React from 'react'

import "../Footer/footer.css"

const quickLinks01 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commercial'
    },

]

const quickLinks02 = [
    {
        path: '#',
        display: 'Pricing'
    },
    {
        path: '#',
        display: 'Documentation'
    },
    {
        path: '#',
        display: 'Guide'
    },
]
const quickLinks03 = [
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#',
        display: 'jobs'
    },
    {
        path: '#blog',
        display: 'Blog'
    },
]

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_wrapper">
                    <div className="footer_logo">
                        <h2>Growish</h2>
                        <p className="description">Grow with us</p>
                        <p className="small_text description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Cumque, minus dolorum obcaecati dignissimos nemo eum.
                        </p>
                    </div>
                    <div className="footer_quick-links">
                        <h3 className="quick_link-title">Solutions</h3>
                        <ul className="quick_link" >
                            {
                                quickLinks01.map((item, index) => (
                                    <li className="quick_link-item" key={index}><a href={item.path}> {item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer_quick-links">
                        <h3 className="quick_link-title">Support</h3>
                        <ul className="quick_link" >
                            {
                                quickLinks02.map((item, index) => (
                                    <li className="quick_link-item" key={index}><a href={item.path}> {item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footer_quick-links">
                        <h3 className="quick_link-title">Company</h3>
                        <ul className="quick_link" >
                            {
                                quickLinks03.map((item, index) => (
                                    <li className="quick_link-item" key={index}><a href={item.path}> {item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright {year}, developed by Anil Kumar Barik. All Rights Reserved{" "}</p>
            </div>
        </footer>
    )
}

export default Footer