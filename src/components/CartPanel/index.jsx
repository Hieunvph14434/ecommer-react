import { Button } from '@mui/material'
import React from 'react'
import { MdOutlineDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CartPanel = () => {
    return (
        <>
            <div className='scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to={'/product/7877'} className='block group'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                className='w-full group-hover:scale-105'
                            />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-10 relative'>
                        <h4 className='text-[14px] font-[500]'>
                            <Link to={'/product/7877'} className='link transition-all'>
                                Siril Georgetter Pink Color Saree with Blouse piece
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-bold'>Price: $25</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to={'/product/7877'} className='block group'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                className='w-full group-hover:scale-105'
                            />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-10 relative'>
                        <h4 className='text-[14px] font-[500]'>
                            <Link to={'/product/7877'} className='link transition-all'>
                                Siril Georgetter Pink Color Saree with Blouse piece
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-bold'>Price: $25</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to={'/product/7877'} className='block group'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                className='w-full group-hover:scale-105'
                            />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-10 relative'>
                        <h4 className='text-[14px] font-[500]'>
                            <Link to={'/product/7877'} className='link transition-all'>
                                Siril Georgetter Pink Color Saree with Blouse piece
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-bold'>Price: $25</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to={'/product/7877'} className='block group'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                className='w-full group-hover:scale-105'
                            />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-10 relative'>
                        <h4 className='text-[14px] font-[500]'>
                            <Link to={'/product/7877'} className='link transition-all'>
                                Siril Georgetter Pink Color Saree with Blouse piece
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-bold'>Price: $25</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>
                    </div>
                </div>
                <div className='cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4'>
                    <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                        <Link to={'/product/7877'} className='block group'>
                            <img 
                                src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg"
                                className='w-full group-hover:scale-105'
                            />
                        </Link>
                    </div>

                    <div className='info w-[75%] pr-10 relative'>
                        <h4 className='text-[14px] font-[500]'>
                            <Link to={'/product/7877'} className='link transition-all'>
                                Siril Georgetter Pink Color Saree with Blouse piece
                            </Link>
                        </h4>

                        <p className='flex items-center gap-5 mt-2 mb-2'>
                            <span>Qty: <span>2</span></span>
                            <span className='text-primary font-bold'>Price: $25</span>
                        </p>

                        <MdOutlineDeleteOutline className='absolute top-[10px] right-[10px] cursor-pointer text-[20px] link transition-all'/>
                    </div>
                </div>
            </div>

            <br />

            <div className='bottomSec absolute bottom-[10px] left-[10px] w-full pr-5'>
                <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>1 item</span>
                        <span className='text-primary font-bold'>$86.00</span>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>Shipping</span>
                        <span className='text-primary font-bold'>$8.00</span>
                    </div>
                </div>

                <div className='bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <span className='text-[14px] font-[600]'>Total (tax excl.)</span>
                        <span className='text-primary font-bold'>$93.00</span>
                    </div>

                    <br />

                    <div className='flex items-center justify-between w-full gap-5'>
                        <Link to={'/cart'} className='w-[50%] d-block'>
                            <Button className='btn-org btn-lg w-full'>View Cart</Button>
                        </Link>
                        <Link to={'/checkout'} className='w-[50%] d-block'>
                            <Button className='btn-org btn-lg w-full'>Checkout</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CartPanel