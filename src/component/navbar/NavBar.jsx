import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItem } from '../../redux/cartSlice'
const NavBar = () => {
  const [searchItem, setSearchItem] = useState('')
  let navigate = useNavigate()


  const handleChange = (e) => {
    e.preventDefault()
    navigate(`/search/${searchItem}`)
    setSearchItem('')
  }
  const cartItem=useSelector(selectCartItem)
// console.log(cartItem);

  return (
    <>

      <header>
        <div className='container nav_bar'>
          <Link to={'/'} className='brand'>E-Cart  </Link>

          <form onSubmit={handleChange} className='searchBar'>
            <input type='text' placeholder='search'
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </form>

          <Link to={'/carts'} className='cart'>
          <i className="fas fa-cart-shopping"></i>
          <span> {cartItem.length}</span>
          </Link>
        </div>

        <div className='nav_bar_wraper container'>
        <Link to={'/'} className='item'   >no filter</Link>
          <div className='item'   >filter by {'=>'} </div>
          <Link to={`category/men's clothing`}  className='item'>men's clothing</Link>
          <Link to={`category/women's clothing`} className='item'>women's clothing</Link>
          <Link to={`category/jewelery`}  className='item'>jewelery</Link>
          <Link to={`category/electronics`} className='item'>electronics </Link>
        </div>
      </header>

    </>
  )
}

export default NavBar