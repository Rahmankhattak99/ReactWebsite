import React from 'react';
import { Carousel, carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import jpg from '../image/background image-3.jpg';
import jpg1 from '../image/background image-4.jpg';
import jpg2 from '../image/background image-5.jpg';

function Service() {
    return (
        <div>
            {/* <h1>Service</h1> */}

            <Carousel infiniteLoop autoPlay showStatus={false} interval={1000} showThumbs={false}>
                <div>
                    <img src={jpg} />
                    <p className='legend'>Front e Developer</p>
                </div>
                <div>
                    <img src={jpg1} />
                    <p className='legend'>Back End Developer</p>
                </div>
                <div>
                    <img src={jpg2} />
                    <p className='legend'>Full Stack Developer</p>
                </div>
            </Carousel>

        </div>
    )
}

export default Service
