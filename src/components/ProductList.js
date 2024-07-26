import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ singleProduct }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://35.154.132.235:5000/admin/product/products');
      setProducts(response.data.result.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const productHandler = (product) => {
    singleProduct(product);
    navigate('/product');
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className='text-xl font-bold'>Product List</h1>
      <div className='w-[100vw] flex flex-wrap gap-20 mt-8 border-spacing-4 rounded-3xl'>
        {products.map((product, index) => (
          <div key={index} className='items-center'>
            <div className='w-[200px] h-[150px] bg-slate-700 overflow-hidden' onClick={() => productHandler(product)}>
              <img src={product.productImage} width={200} height={200} className='w-[200px] h-[150px] object-cover' alt='Product' />
            </div>
            <div className='text-lg font-medium'>{product.brand}</div>
            <div className='text-lg font-medium'>Rs {product.mrp_price}</div>
            <div className='text-lg font-medium'>Category: {product.category}</div>
            <div className='text-lg font-medium'>Sub Category: {product.sub_category}</div>
            <div className='text-lg font-medium'>Stock Quantity: {product.stock_quantity}</div>
            <button className='w-[80px] bg-sky-500 hover:bg-sky-700'>Buy now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
