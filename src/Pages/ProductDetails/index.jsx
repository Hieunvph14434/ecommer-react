import React, { useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductZoom from '../../components/ProductZoom';
import { Button, Rating, TextField } from '@mui/material';
import ProductsSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetailsComponent';

const ProductDetails = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className='py-5'>
                <div className='container'>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" href="/" className='link transition'>
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href="/"
                            className='link transition'
                        >
                            Fashion
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            className='link transition'
                        >
                            Cropped Satin Bomber Jacket
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>

            <section className='bg-white py-5'>
                <div className='container flex gap-8 items-center'>
                    <div className='productZoomContainer w-[40%]'>
                        <ProductZoom/>
                    </div>

                    <div className='productContent w-[60%] pr-10 pl-10'>
                        <ProductDetailsComponent />
                    </div>
                </div>

                <div className='container pt-10'>
                    <div className='flex items-center gap-8 mb-5'>
                        <span 
                            className={`link text-[17px] cursor-pointer font-[500] ${ activeTab === 0 && 'text-primary' }`}
                            onClick={() => setActiveTab(0)}
                        >
                            Description
                        </span>
                        <span 
                            className={`link text-[17px] cursor-pointer font-[500] ${ activeTab === 1 && 'text-primary' }`}
                            onClick={() => setActiveTab(1)}
                        >
                            Product Details
                        </span>
                        <span 
                            className={`link text-[17px] cursor-pointer font-[500] ${ activeTab === 2 && 'text-primary' }`}
                            onClick={() => setActiveTab(2)}
                        >
                            Reviews (5)
                        </span>
                    </div>

                    {
                        activeTab === 0 && (
                            <div className='shadow-md w-full py-5 px-8 rounded-md'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ac</p>
                                <h4>Thread Work Pure Cotton</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h4>Free Shipping & Return</h4>
                            </div>
                        )
                    }

                    {
                        activeTab === 1 && (
                            <div className='shadow-md w-full py-5 px-8 rounded-md'>
                                <div class="relative overflow-x-auto">
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Stand Up
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Folded(w/o wheels)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Folded(w/ wheels)
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Door Pass Through
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b border-gray-200">
                                                <td class="px-6 py-4 font-[500]">
                                                    35''L x 24''W x 37-45''H(front to back wheel)
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 18.5''W x 16.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 24''W x 18.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    24
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-200">
                                                <td class="px-6 py-4 font-[500]">
                                                    35''L x 24''W x 37-45''H(front to back wheel)
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 18.5''W x 16.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 24''W x 18.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    24
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-200">
                                                <td class="px-6 py-4 font-[500]">
                                                    35''L x 24''W x 37-45''H(front to back wheel)
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 18.5''W x 16.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 24''W x 18.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    24
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b border-gray-200">
                                                <td class="px-6 py-4 font-[500]">
                                                    35''L x 24''W x 37-45''H(front to back wheel)
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 18.5''W x 16.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    32.5''L x 24''W x 18.5''H
                                                </td>
                                                <td class="px-6 py-4 font-[500]">
                                                    24
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    }

                    {
                        activeTab === 2 && (
                            <div className='shadow-md w-[80%] py-5 px-8 rounded-md'>
                                <div className='w-full productReviewsContainer'>
                                    <h2 className='text-[18px]'>Customer questions & answers</h2>

                                    <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5'>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                        <div className='review pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between'>
                                            <div className='info w-[60%] flex items-center gap-3'>
                                                <div className='img w-[80px] h-[80px] overflow-hidden rounded-full'>
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s" className='w-full' />
                                                </div>

                                                <div className='w-[80%]'>
                                                    <h4 className='text-[16px]'>Rinku Verma</h4>
                                                    <h5 className='text-[13px] mb-0'>2024-12-01</h5>
                                                    <p className='mt-0 mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                </div>
                                            </div>

                                            <Rating name='size-small' defaultValue={4} size='small' readOnly />
                                        </div>
                                    </div>

                                    <br />

                                    <div className='reviewForm bg-[#fafafa] p-4 rounded-md'>
                                        <h2 className='text-[18px]'>Add a review</h2>
                                        
                                        <form className='w-full mt-5'>
                                            <TextField
                                                id='outline-multiline-flexible'
                                                label='Write a review...'
                                                className='w-full'
                                                multiline
                                                rows={4}
                                            />

                                            <br /> <br />

                                            <Rating defaultValue={5} />

                                            <div className='flex items-center mt-5'>
                                                <Button className='btn-org'>Submit Review</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <div className='container pt-8'>
                    <h2 className="text-[22px] font-[600] pb-0">Related Products</h2>
                    <ProductsSlider items={6} />
                </div>
            </section>
        </>
    )
}

export default ProductDetails