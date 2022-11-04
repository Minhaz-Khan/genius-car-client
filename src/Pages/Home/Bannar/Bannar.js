import React from 'react';
import img1 from '../../../assets/images/homeCarousel/1.jpg'
import img2 from '../../../assets/images/homeCarousel/2.jpg'
import img3 from '../../../assets/images/homeCarousel/3.jpg'
import img4 from '../../../assets/images/homeCarousel/4.jpg'
import BannarItem from './BannarItem';
const Bannar = () => {
    const bannarData = [
        {
            image: img1,
            previous: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            previous: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            previous: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            previous: 3,
            id: 4,
            next: 1
        },

    ]
    return (
        <div className="carousel w-full">

            {bannarData.map(slide => <BannarItem key={slide.id} slide={slide}></BannarItem>)}

        </div>
    );
};

export default Bannar;