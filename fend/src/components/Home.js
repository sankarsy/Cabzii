
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div>
        <Carousel>
                <div>
                    <img src="assets/1.jpeg" alt='image-1' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt='image-2'/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt='image-3' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

    </div>
  )
}

export default Home