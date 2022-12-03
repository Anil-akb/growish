import React from 'react'
import "../../style/team.css"

import team01 from "../../images/team-01.png"
import team02 from "../../images/team-02.png"
import team03 from "../../images/team-03.png"
import team04 from "../../images/team-04.png"


const teamMembers = [
  {
    imgUrl: team01,
    name: 'Satyam Ranbadia',
    position: 'Product Developer'
  },
  {
    imgUrl: team02,
    name: 'Annie Marrie',
    position: 'Team Manager'
  },
  {
    imgUrl: team03,
    name: 'Kunal Patel',
    position: 'UI/UX Designer'
  },
  {
    imgUrl: team01,
    name: 'Ramakant Gahan',
    position: 'Software Developer'
  },
]

const Team = () => {
  return (
    <section className='our_team'>
      <div className="container">
        <div className="team_content">
          <h6 className="subtitle"> Our Team</h6>
          <h2>
            Meet with <span className='highlight'>Our Team</span>
          </h2>
        </div>

        <div className="team_wrapper">
          {
            teamMembers.map((item, index) => (
              <div className="team_item" key={index}>
                <div className="team_img">
                  <img src={item.imgUrl} alt="team01" />
                </div>
                <div className="team_details">
                  <h4>{item.name}</h4>
                  <p className="description">{item.position}</p>
                  <div className="team_member-social">
                    <span><i class="ri-linkedin-line"></i></span>
                    <span><i class="ri-twitter-line"></i></span>
                    <span><i class="ri-instagram-line"></i></span>
                    <span><i class="ri-facebook-line"></i></span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team