import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Typography from '../components/Typography';

const HomePage = () => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate('/product');
  };

  return (
    <>
      <NavBar />
      <div className='mt-1 pt-6'>
        <Outlet />
      </div>
      <button className='mb-20' onClick={() => goToProduct()}>
        Go To Product
      </button>
      <div className='h-[800px]'>
        <h1>This is Typography</h1>
        <Typography word='one' variant='h1' />
        <Typography word='two' variant='h2' />
        <Typography word='three' variant='h3' />
        <Typography word='four' variant='h4' />
        <Typography word='five' variant='h5' />
        <Typography word='six' variant='h6' />
        <p className='mt-20'>this is end of the Typography</p>
      </div>
    </>
  );
};

export default HomePage;
