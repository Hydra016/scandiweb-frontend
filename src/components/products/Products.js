import React, { useEffect, useState } from 'react';
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/productsSlice'; 
import Header from '../Header';

function Products() {

  const [checked, setChecked] = useState([])
  const { products, isLoading } = useSelector((state) => state.products );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
    <Header />
     <div className='content'>
      <div className='content-container'>
      {
        !isLoading && products && products.map(item => {
          return (
            <Product key={item.id} checked={checked} setChecked={setChecked} item={item} />
          )
        })
      }
      </div>
    </div>
    </>
   
  )
}

export default Products