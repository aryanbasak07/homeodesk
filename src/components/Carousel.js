import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
// import Image1 from './assets/caraImage-1.png'

export default function Carousel() {
  return (
    <MDBCarousel showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        // src={Image1}
        alt='...'
        style={{height: '40vh'}}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
        style={{height: '40vh'}}
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
        style={{height: '40vh'}}
      />
    </MDBCarousel>
  );
}