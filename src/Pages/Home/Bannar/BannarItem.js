import React from 'react';
import './BannarItem.css'

const BannarItem = ({ slide }) => {
    const { image, previous, id, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='BannerImg'>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end space-x-4 transform -translate-y-1/2 left-5 right-12 bottom-12 
                ">
                <a href={`#slide${previous}`} className="btn btn-circle bg-[#cacaca2a]">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-[#FF3811]">❯</a>
            </div>
            <div className="absolute flex justify-end space-y-8 transform -translate-y-1/2 left-24 top-2/4 flex-col
                ">
                <h1 className='text-6xl font-bold text-gray-100'>Affordable<br />
                    Price For Car<br />
                    Servicing</h1>
                <div className='w-3/5 text-gray-100'>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className='text-gray-100'>
                    <button className='rounded-sm px-5 py-2 border border-[#FF3811] mr-5'>Discover More</button>
                    <button className='rounded-sm px-5 py-2 bg-[#FF3811]'>Latest Project</button>
                </div>
            </div>
        </div>
    );
};

export default BannarItem;