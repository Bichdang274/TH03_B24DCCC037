import React from 'react'
import { Category } from '../types'

type Props = {
  q: string
  setQ: (s: string) => void
  cat: string
  setCat: (c: string) => void
  min: string
  setMin: (s: string) => void
  max: string
  setMax: (s: string) => void
}

const categories: (Category | 'Tất cả')[] = ['Tất cả','Điện tử','Quần áo','Đồ ăn','Sách','Khác']

export default function SearchFilter({ q, setQ, cat, setCat, min, setMin, max, setMax }: Props) {
  return (
    <div className="search-filter">
      <input className="input" placeholder="Tìm theo tên..." value={q} onChange={e=>setQ(e.target.value)} />
      <select value={cat} onChange={e=>setCat(e.target.value)}>
        {categories.map(c=> <option key={c} value={c}>{c}</option>)}
      </select>
      <input className="input" placeholder="Min giá" value={min} onChange={e=>setMin(e.target.value)} />
      <input className="input" placeholder="Max giá" value={max} onChange={e=>setMax(e.target.value)} />
    </div>
  )
}
