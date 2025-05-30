import React, { useState } from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FiMinusSquare } from "react-icons/fi";
import Button from '@mui/material/Button';

const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null)
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null)

    const openSubmenu = (index) => () => {
        setSubmenuIndex(submenuIndex === index ? null : index);
    }

    const openInnerSubmenu = (index) => () => {
        setInnerSubmenuIndex(innerSubmenuIndex === index ? null : index);
    }

    return (
        <>
            <div className='scroll'>
                <ul className='w-full'>
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to={'/'} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Fashion
                            </Button>
                        </Link>
                        { 
                            submenuIndex === 0 
                                ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openSubmenu(0)}/> 
                                : <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openSubmenu(0)}/>
                        }
                        {submenuIndex === 0 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative'>
                                    <Link to={'/'} className='w-full'>
                                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                            Apparel
                                        </Button>
                                    </Link>
                                    { 
                                        innerSubmenuIndex === 0 
                                            ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openInnerSubmenu(0)}/> 
                                            : <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openInnerSubmenu(0)}/>
                                    }

                                    {innerSubmenuIndex === 0 && (
                                        <ul className='inner_submenu w-full pl-3'>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Smart Tablet
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Crepe T-Shirt
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Leather Watch
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Rolling Diamond
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className='list-none flex items-center relative flex-col'>
                        <Link to={'/'} className='w-full'>
                            <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                Fashion
                            </Button>
                        </Link>
                        { 
                            submenuIndex === 1 
                                ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openSubmenu(1)}/> 
                                : <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openSubmenu(1)}/>
                        }
                        {submenuIndex === 1 && (
                            <ul className='submenu w-full pl-3'>
                                <li className='list-none relative'>
                                    <Link to={'/'} className='w-full'>
                                        <Button className='w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]'>
                                            Apparel
                                        </Button>
                                    </Link>
                                    { 
                                        innerSubmenuIndex === 0 
                                            ? <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openInnerSubmenu(0)}/> 
                                            : <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer' onClick={openInnerSubmenu(0)}/>
                                    }

                                    {innerSubmenuIndex === 0 && (
                                        <ul className='inner_submenu w-full pl-3'>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Smart Tablet
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Crepe T-Shirt
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Leather Watch
                                                </Link>
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link to={'/'} className='link w-full !text-left !justify-start !px-3 transition text-[14px]'>
                                                    Rolling Diamond
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        )}
                    </li>

                </ul>
            </div>
        </>
    )
}

export default CategoryCollapse