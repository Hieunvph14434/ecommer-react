import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const CartPage = () => {
    return (
        <section className='section py-5'>
            <div className='container w-[70%] max-w-[70%] flex'>
                <div className='leftPart w-[75%]'>
                    <h2>Your Cart</h2>
                    <p className='mt-0'>There are <span className='font-bold text-primary'>2</span> products in your cart</p>
                
                    <div className='shadow-md rounded-md bg-white'>
                        <div className='cartItem w-full p-3 flex items-center gap-4'>
                            <div className='img w-[10%] rounded-md overflow-hidden'>
                                <Link to={'/product/7878'} className='group'>
                                    <img 
                                        src="https://serviceapi.spicezgold.com/download/1742463096955_hbhb1.jpg" 
                                        className='w-full group-hover:scale-105 transition-all'
                                    />
                                </Link>
                            </div>

                            <div className='info w-[90%] relative'>
                                <IoCloseSharp className='cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all'/>
                                <span className='text-[13px]'>Sangria</span>
                                <h3 className='text-[15px]'>
                                    <Link className='link'>
                                        Men Opaque Casual Shirt
                                    </Link>
                                </h3>

                                <div className='flex items-center gap-4'>
                                    <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600] p-1'>Size S</span>
                                </div>

                                <div className='flex items-center gap-4 mt-2'>
                                    <span className='price text-[14px] font-[500]'>
                                        $58.00
                                    </span>
                                    <span className='oldPrice line-through text-gray-500 text-[14px] font-[500]'>
                                        $58.00
                                    </span>
                                    <span className='price text-primary text-[14px] font-[500]'>
                                        50% OFF
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CartPage