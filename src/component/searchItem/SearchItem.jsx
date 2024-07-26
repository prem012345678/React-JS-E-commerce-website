import './searchitem.css'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../../redux/cartSlice'

const SearchItem = () => {

  const [filterData, setFilterData] = useState([])
  let { item } = useParams()

  useEffect(() => {
    const Api = async () => {

      const res = await fetch('https://fakestoreapi.com/products')
      const result = await res.json()
      const filterData = result.filter((prod) =>
        prod.title.toLowerCase().includes(item.toLowerCase()))
      setFilterData(filterData)
      // console.log(filterData);

    }
    Api()
  }, [item])

  const dispatch = useDispatch()
  const handleAddTCart = (prod) => {
    dispatch(addToCart(prod))
  }

  return (


    <>
      <div className='container'>
        <div className='row'>
          {
            filterData.map((prod) => {
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

export default SearchItem