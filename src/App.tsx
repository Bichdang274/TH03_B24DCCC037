import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import AddProduct from './pages/AddProduct'
import EditProduct from './pages/EditProduct'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1><Link to="/">Product Manager</Link></h1>
        <nav>
          <Link to="/add" className="btn">Thêm sản phẩm</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </main>
    </div>
  )
}
