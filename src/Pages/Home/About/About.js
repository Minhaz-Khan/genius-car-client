import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-20 bg-gray-100 pl-5">
            <div className="flex flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2 relative">
                    <img src={person} alt="" className='w-10/12 rounded-xl' />
                    <img src={parts} alt="" className='absolute top-1/2 w-1/2 right-0 rounded-xl border-8 border-white' />
                </div>
                <div className=" w-1/2 pl-10 space-y-6">
                    <p className='font-bold text-orange-500'>About Us</p>
                    <h2 className='text-5xl font-bold '>We are qualified <br />& of experience <br />in this field</h2>
                    <p className='text-gray-400'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-gray-400'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className='px-5 py-2 bg-[#FF3811] text-gray-100 rounded-md'>Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;