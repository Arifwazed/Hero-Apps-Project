import React from 'react';
import google from '../../assets/google-play.png';
import app from '../../assets/app-store.png'
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className=' text-center pt-15 px-4'>
                <h1 className='text-6xl font-bold mb-6'>We Build <br /> <span className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[#627382] text-lg max-w-[860px] mx-auto mb-8'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='mb-10'>
                    <a className='btn text-base py-5 bg-white mr-5' href='https://play.google.com/store/games?hl=en' target='_blank' rel="noopener noreferrer"><img src={google} width="25px" alt="" />Google Play</a>
                    <a className='btn text-base py-5 bg-white' href='https://www.apple.com/app-store/' target='_blank' rel="noopener noreferrer"><img src={app} width="25px" alt="" />App Store</a>
                </div>
                <img src={heroImg} className='mx-auto md:h-[400px] w-[310px] md:w-auto' alt="" />
            </div>
        </div>
    );
};

export default Banner;