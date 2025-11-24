import React, { useState } from 'react'
import { Product, Category } from '../types'

type Props = {
  initial?: Product
  onSubmit: (p: Omit<Product,'id'> & { id?: number }) => void
}

export default function ProductForm({ initial, onSubmit }: Props) {
  const [ten,setTen]=useState(initial?.ten ?? '')
  const [danhMuc,setDanhMuc]=useState<string>(initial?.danhMuc ?? '')
  const [gia,setGia]=useState<string>(initial? String(initial.gia) : '')
  const [soLuong,setSoLuong]=useState<string>(initial? String(initial.soLuong) : '')
  const [moTa,setMoTa]=useState(initial?.moTa ?? '')
  const [errors,setErrors]=useState<Record<string,string>>({})

  const validate = () => {
    const e: Record<string,string> = {}
    if (!ten || ten.trim().length < 3) e.ten = 'Tên bắt buộc, tối thiểu 3 ký tự'
    const g = Number(gia)
    if (!gia || isNaN(g) || g <= 0) e.gia = 'Giá phải là số dương'
    const s = Number(soLuong)
    if (!soLuong || !Number.isInteger(s) || s < 0) e.soLuong = 'Số lượng phải là số nguyên không âm'
    if (!danhMuc) e.danhMuc = 'Chọn danh mục'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    onSubmit({
      id: initial?.id,
      ten: ten.trim(),
      danhMuc: danhMuc as Category,
      gia: Number(gia),
      soLuong: Number(soLuong),
      moTa
    })
  }

  return (
    <form onSubmit={handle}>
      <div className="form-row">
        <label>Tên sản phẩm</label>
        <input className="input" value={ten} onChange={e=>setTen(e.target.value)} />
        {errors.ten && <div className="small" style={{color:'red'}}>{errors.ten}</div>}
      </div>

      <div className="form-row">
        <label>Danh mục</label>
        <select className="input" value={danhMuc} onChange={e=>setDanhMuc(e.target.value)}>
          <option value="">-- Chọn --</option>
          <option>Điện tử</option>
          <option>Quần áo</option>
          <option>Đồ ăn</option>
          <option>Sách</option>
          <option>Khác</option>
        </select>
        {errors.danhMuc && <div className="small" style={{color:'red'}}>{errors.danhMuc}</div>}
      </div>

      <div className="form-row">
        <label>Giá</label>
        <input className="input" value={gia} onChange={e=>setGia(e.target.value)} />
        {errors.gia && <div className="small" style={{color:'red'}}>{errors.gia}</div>}
      </div>

      <div className="form-row">
        <label>Số lượng</label>
        <input className="input" value={soLuong} onChange={e=>setSoLuong(e.target.value)} />
        {errors.soLuong && <div className="small" style={{color:'red'}}>{errors.soLuong}</div>}
      </div>

      <div className="form-row">
        <label>Mô tả</label>
        <textarea className="input" value={moTa} onChange={e=>setMoTa(e.target.value)} />
      </div>

      <div style={{display:'flex',gap:8}}>
        <button className="btn" type="submit">Lưu</button>
      </div>
    </form>
  )
}
