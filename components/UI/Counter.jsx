import React from 'react'

import "../../style/counter.css"

const counterData = [
    {
        number: '2k',
        text: 'Clients'
    },
    {
        number: 210,
        text: 'Running Projects'
    },
    {
        number: 400,
        text: 'Projects Complete'
    },
]

const Counter = () => {
    return (
        <section className="counter" id="projects">
            <div className="container">
                <div className="counter_wrapper">
                    {
                        counterData.map((item, index) => (
                            <div className="counter_item" key={index}>
                                <h3 className="counter_number">{item.number}</h3>
                                <h4 className="counter_title">{item.text}</h4>
                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default Counter