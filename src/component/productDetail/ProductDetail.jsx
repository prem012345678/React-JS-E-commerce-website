import React, { useEffect, useState } from 'react'
import './productDetail.css'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
const ProductDetail = () => {
  let { id } = useParams()

  const [product, setProduct] = useState({})
  const [sameProduct, setSameProduct] = useState([])
  useEffect(() => {
    const Api = async () => {

      const res = await fetch('https://fakestoreapi.com/products')
      const result = await res.json()

      const filterProduct = result.filter((item) => item.id == id)
      setProduct(filterProduct[0])

      const relatedProduct = result.filter((prods) => prods.category === product.category)
      setSameProduct(relatedProduct)
    }
    Api()
  }, [id, product.category])

  const dispatch = useDispatch()
  const handleAddTCart = (prod) => {
    dispatch(addToCart(prod))
  }


  return (
    <>
      <div className='container'>
        <div className='productDetail'>
          <div className='img'>
            <img src={product.image} />
          </div>
          <div className='details'>
            <div className='category'>{product.category} </div>
            <div className='title'>{product.title} </div>
            <div className='price'>
              <div className='price1' >{`₹ ${product.price}`} </div>
              <div className='price2' >{`₹ ${(product.price) * 2}`} </div>
            </div>
            <div className='btns'>
              <button onClick={() => handleAddTCart(product)} >Buy now </button>
              <button >Add to cart </button>
            </div>

          </div>
        </div>

        {/* same product detail  */}
        <h1>Related Product</h1>

        <div className='row'>
          {
            sameProduct.map((prod) => {
              return <div key={prod.id} className='card'>
                <Link to={`/product/${prod.id}`} className='image'>
                  <img src={prod.image} />
                </Link>
                <div className='text'>
                  <div className='category'>{prod.category} </div>
                  <div className='title'>{prod.title} </div>
                  <div className='price'>
                    <div className='price1' >{`₹ ${prod.price}`} </div>
                    <div className='price2' >{`₹ ${(prod.price) * 2}`} </div>
                  </div>
                  <div className='btn'>
                    <button >buy now </button>
                    <button onClick={() => handleAddTCart(prod)}>Add to cart </button>
                  </div>
                </div>

              </div>
            })
          }
        </div>

      </div>
    </>
  )
}

export default ProductDetail