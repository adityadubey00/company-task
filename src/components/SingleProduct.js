
import React from 'react'

const SingleProduct = (props) => {
    const singleProductDetail = props.singleProductDetail;



  return (
            <div className='flex flex-col mt-4 px-10 w-[40%] items-center'>
                <div className='w-[200px] h-[150px] bg-slate-700 overflow-hidden'>
                    <img src={singleProductDetail.productImage} width={200} height={200} className='w-[200px] h-[150px] object-cover'/>
                </div>
                <div className='text-xl font-medium'>{singleProductDetail.brand}</div>

                <div className=''>{singleProductDetail.description}</div>
                
            </div>
  )
}

export default SingleProduct