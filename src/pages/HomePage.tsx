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
      <h1>This is Typography</h1>
      <Typography word='static' variant='h1' />
      <Typography word='static' variant='h2' />
      <Typography word='static' variant='h3' />
      <Typography word='static' variant='h4' />
      <Typography word='static' variant='h5' />
      <Typography word='static' variant='h6' />
      <p>this is end of the Typography</p>
    </>
  );
};

export default HomePage;
