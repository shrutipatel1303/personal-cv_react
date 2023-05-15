import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

  const data = [
    {
      avatar: AVTR1,
      name: 'Krutarth Desai',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' 
    },
    {
      avatar: AVTR2,
      name: 'Dhwani Sheth',
      review: 'Lorem ipsum dolor sit amet7fu, consectetur adipiscing elit, sed do eiusmodd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      avatar: AVTR3,
      name: 'Durva Bhrambhatt',
      review: 'Lorem ipsum dolor sit ametyigiy, consectetur adipiscing elit, sed do eiusmodd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      avatar: AVTR4,
      name: 'Shruti Patel',
      review: 'Lorem ipsum dolor sit ametyuyu, consectetur adipiscing elit, sed do eiusmodd tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]


const Testimonials = () => {

  return (

    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review}, index) => {
           return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
           )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials