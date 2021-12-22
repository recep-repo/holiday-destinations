import React from 'react'
import { Carousel } from 'react-bootstrap'
import slider2 from '../image/slider2.jpg'
import slider3 from '../image/slider3.jpg'
import slider4 from '../image/slider4.jpg'

const Sliders = () => {
    return (
        <div className='w-75 m-auto mt-1'>
            <Carousel fade autoPlay={true} interval={5000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider2} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider3} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slider4} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Sliders
