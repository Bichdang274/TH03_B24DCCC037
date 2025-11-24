import React from 'react'
import { Product } from '../types'
import { Link, useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

const ProductCard = ({ product }: { product: Product }) => {
  const { dispatch } = useProductContext()
  const nav = useNavigate()

  const onDelete = () => {
    if (confirm('Bạn có chắc muốn xoá sản phẩm này?')) {
      dispatch({ type: 'DELETE', payload: product.id })
    }
  }

  return (
    <div className="card">
      <h3>{product.ten}</h3>
      <div className="small">{product.danhMuc} • {product.soLuong} cái</div>
      <p className="small">{product.moTa}</p>
      <div className="actions" style={{marginTop:8}}>
        <div style={{fontWeight:700}}>{product.gia.toLocaleString()}₫</div>
        <div style={{marginLeft:'auto',display:'flex',gap:8}}>
          <button className="btn" onClick={() => nav(`/products/${product.id}`)}>Xem</button>
          <Link className="btn" to={`/edit/${product.id}`}>Sửa</Link>
          <button className="btn" onClick={onDelete} style={{background:'#dc3545'}}>Xoá</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
