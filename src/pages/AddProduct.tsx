import React from 'react'
import ProductForm from '../components/ProductForm'
import { useProductContext } from '../context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { Product } from '../types'

export default function AddProduct() {
  const { state, dispatch } = useProductContext()
  const nav = useNavigate()
  const nextId = Math.max(0, ...state.products.map(p=>p.id)) + 1

  const onSubmit = (p: Omit<Product,'id'> & { id?: number }) => {
    const prod: Product = { ...(p as any), id: nextId }
    dispatch({ type: 'ADD', payload: prod })
    nav('/')
  }

  return (
    <div className="card">
      <h2>Thêm sản phẩm</h2>
      <ProductForm onSubmit={onSubmit} />
    </div>
  )
}
