import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider py-4'>
            <div className='container'>
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className='sliderHome'
                >
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1745504016576_NewProject.jpg"
                                alt='Banner slide' className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg"
                                alt='Banner slide' className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg"
                                alt='Banner slide' className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1741660862304_NewProject(8).jpg"
                                alt='Banner slide' className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1745504025727_NewProject(1).jpg"
                                alt='Banner slide' className='w-full'
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider