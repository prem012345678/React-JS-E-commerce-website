
import React from 'react'
import NavBar from './component/navbar/NavBar'
import Products from './component/Product/Products'
import {BrowserRouter, HashRouter, Route, Router, Routes} from 'react-router-dom'
import ProductDetail from './component/productDetail/ProductDetail'
import SearchItem from './component/searchItem/SearchItem'
import Carts from './component/cart/Carts'
import CategoryByProduct from './component/categoryByProduct/CategoryByProduct'
const App = () => {
  return (
  <>
<HashRouter>
<NavBar/>
<Routes>
<Route path='/' element={<Products/>}/>
<Route path='/product/:id' element={<ProductDetail/>}/>
<Route path='/category/:name' element={<CategoryByProduct/>} />
<Route path='/search/:item' element={<SearchItem/>}/>
<Route path='/carts' element={<Carts/>}/>
</Routes>
</HashRouter>

  </>
  )
}

export default App