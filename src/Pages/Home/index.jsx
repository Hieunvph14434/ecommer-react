import AdsBannerSlider from "../../components/AdsBannerSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import ProductsSlider from "../../components/ProductsSlider";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import BlogItem from "../../components/BlogItem";
import HomeSliderV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";

export const Home = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <HomeSlider />

            <section className="py-6">
                <div className="container flex gap-5">
                    <div className="part1 w-[70%]">
                        <HomeSliderV2 />
                    </div>

                    <div className="part2 w-[30%] flex items-center justify-between flex-col">
                        <BannerBoxV2 info={'right'} image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"} />
                        <BannerBoxV2 info={'left'} image={"https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"} />
                    </div>
                </div>
            </section>

            <HomeCatSlider />

            <section className="bg-white py-8">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className="text-[22px] font-[600]">Popular Products</h2>
                            <p className="text-[14px] font-[400]">Do not miss the current offers until the end of March.</p>
                        </div>

                        <div className="rightSec w-[60%]">
                        <Tabs 
                            value={value} 
                            onChange={handleChange} 
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            <Tab label="Fashion" />
                            <Tab label="Electronics" />
                            <Tab label="Bags" />
                            <Tab label="Footwear" />
                            <Tab label="Groceries" />
                            <Tab label="Beauty" />
                            <Tab label="Wellness" />
                            <Tab label="Jewellery" />
                        </Tabs>
                        </div>
                    </div>

                    <ProductsSlider items={5} />
                </div>
            </section>

            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <div className="freeShipping w-[80%] m-auto p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7">
                        <div className="col1 flex items-center gap-4">
                            <LiaShippingFastSolid className="text-[50px]" />
                            <span className="text-[20px] font-[600] uppercase">
                                Free Shipping
                            </span>
                        </div>

                        <div className="col2">
                            <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and over $200</p>
                        </div>

                        <p className="font-bold text-[25px]">- Only $200*</p>
                    </div>

                    <AdsBannerSliderV2 items={4} />
                </div>
            </section>

            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[22px] font-[600]">Latest Products</h2>
                    <ProductsSlider items={6} />

                    <AdsBannerSlider items={3} />
                </div>
            </section>

            <section className="py-5 pt-0 bg-white">
                <div className="container">
                    <h2 className="text-[22px] font-[600]">Featured Products</h2>
                    <ProductsSlider items={6} />

                    <AdsBannerSlider items={2} />
                </div>
            </section>

            <section className="py-5 pb-8 pt-0 bg-white blogSection">
                <div className="container">
                    <h2 className="text-[22px] font-[600] mb-4">From The Blog</h2>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        navigation={true}
                        modules={[Navigation]}
                        className='blogSlider'
                    >
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <BlogItem />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
}