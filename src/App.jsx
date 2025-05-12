import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import ProductListing from './Pages/ProductListing';
import Footer from './components/Footer';
import ProductDetails from './Pages/ProductDetails';
import { createContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ProductZoom from './components/ProductZoom';
import { IoCloseSharp } from 'react-icons/io5';
import ProductDetailsComponent from './components/ProductDetailsComponent';
import Login from './Pages/Login';
import Register from './Pages/Register';
import CartPage from './Pages/Cart';

const MyContext = createContext();

function App() {
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);
  const [maxWidth, setMaxWidth] = useState('lg');
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] = useState(true);

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModal(false);
  };
  
  const toggleCartPanel = (newOpen) => {
    setOpenCartPanel(newOpen)
  }

  const values = {
    setOpenProductDetailsModal,
    setOpenCartPanel,
    openCartPanel,
    toggleCartPanel
  }

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header/>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/productListing" exact={true} element={<ProductListing />} />
            <Route path="/product/:id" exact={true} element={<ProductDetails />} />
            <Route path="/login" exact={true} element={<Login />} />
            <Route path="/register" exact={true} element={<Register />} />
            <Route path="/cart" exact={true} element={<CartPage />} />
          </Routes>
          <Footer/>
        </MyContext.Provider>
      </BrowserRouter>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={openProductDetailsModal}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModal'
      >
        <DialogContent>
          <div className='flex items-center w-full productDetailsModalContainer relative'>
            <Button 
              className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000] !absolute top-[15px] right-[15px] !bg-[#f1f1f1]' 
              onClick={handleCloseProductDetailsModal}
            >
                <IoCloseSharp className='text-[20px]' />
            </Button>

            <div className='col1 w-[40%] px-3'>
              <ProductZoom />
            </div>

            <div className='col2 w-[60%] py-8 px-8 pr-16 productContent'>
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default App

export { MyContext }
