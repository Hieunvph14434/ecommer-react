import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import CategoryCollapse from '../../CategoryCollapse';

const CategoryPanel = (props) => {
    const toggleDrawer = (newOpen) => () => {
        props.setIsOpenCatPanel(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className='categoryPanel'>
            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
                Shop by Categories
                <IoCloseSharp onClick={toggleDrawer(!props.isOpenCatPanel)} className='cursor-pointer text-[20px]'/>
            </h3>
            
            <CategoryCollapse/>
        </Box>
    );

    return (
        <>
            <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(!props.isOpenCatPanel)}>
                {DrawerList}
            </Drawer>
        </>
    )
}

export default CategoryPanel;
