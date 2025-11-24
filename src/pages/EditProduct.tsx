import React from 'react'
import ProductForm from '../components/ProductForm'
import { useProductContext } from '../context/ProductContext'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditProduct() {
  const { id } = useParams()
  const { state, dispatch } = useProductContext()
  const nav = useNavigate()
  const pid = Number(id)
  const product = state.products.find(p=>p.id===pid)
  if (!product) return <div>Không tìm thấy sản phẩm</div>

  const onSubmit = (p: any) => {
    dispatch({ type: 'UPDATE', payload: { ...p, id: pid } })
    nav(`/products/${pid}`)
  }

  return (
    <div className="card">
      <h2>Chỉnh sửa sản phẩm</h2>
      <ProductForm initial={product} onSubmit={onSubmit} />
    </div>
  )
}
