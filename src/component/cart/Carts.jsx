import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, deleteUser, selectCartItem } from '../../redux/cartSlice'
import { Link } from 'react-router-dom'

const Carts = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector(selectCartItem)
  const deletUser = (i) => {
    dispatch(deleteUser(i))
  }
  return (
    <>
      <div className='container'>
        <div className='rows'>
          <div className='continuebtn'>
            {
              cartItem.length === 0 && (<>

                <h2>Your cart is empty</h2>
                <Link to={'/'} className='linkbtn'>continue shoping....</Link>
              </>)
            }
          </div>

          {
            cartItem.map((prod, i) => {
              return <div key={prod.id} className='cartCard'>
                <div className='images'>
                  <img src={prod.image} />
                </div>
                <div className='cartText'>
                  <div className='category'>{prod.category} </div>
                  <div className='title'>{prod.title} </div>
                  <div className='price'>
                    <div className='price1' >{`₹ ${prod.price}`} </div>
                    <div className='price2' >{`₹ ${(prod.price) * 2}`} </div>
                  </div>
                
                <div className='btns'>
                  <button>buy now</button>
                  <button onClick={() => deletUser(i)}>remove</button>
                </div>
                </div>
              </div>
            })
          }
        </div>
        {
          cartItem.length !== 0 && (
            <button className='clearBtn' onClick={() => dispatch(clearCart())}>clear cart</button>
          )
        }


      </div>

    </>
  )
}

export default Carts