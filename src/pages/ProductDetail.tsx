import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'

export default function ProductDetail() {
  const { id } = useParams()
  const { state, dispatch } = useProductContext()
  const nav = useNavigate()
  const pid = Number(id)
  const p = state.products.find(x => x.id === pid)
  if (!p) return <div>Không tìm thấy sản phẩm. <Link to="/">Về trang chủ</Link></div>

  const onDelete = () => {
    if (confirm('Bạn có chắc muốn xoá sản phẩm này?')) {
      dispatch({ type: 'DELETE', payload: p.id })
      nav('/')
    }
  }

  return (
    <div className="card">
      <h2>{p.ten}</h2>
      <div className="small">{p.danhMuc} • {p.soLuong} cái</div>
      <p>{p.moTa}</p>
      <div style={{fontWeight:700}}>{p.gia.toLocaleString()}₫</div>
      <div style={{marginTop:12,display:'flex',gap:8}}>
        <Link className="btn" to={`/edit/${p.id}`}>Sửa</Link>
        <button className="btn" onClick={onDelete} style={{background:'#dc3545'}}>Xoá</button>
        <Link to="/" className="btn">Quay lại</Link>
      </div>
    </div>
  )
}
