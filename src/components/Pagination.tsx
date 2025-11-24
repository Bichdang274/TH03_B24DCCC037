import React from 'react'

export default function Pagination({ page, setPage, totalPages }: { page: number; setPage: (n:number)=>void; totalPages: number }) {
  const pages = Array.from({length: totalPages}, (_,i)=>i+1)
  return (
    <div className="pagination">
      <button className="btn" onClick={()=>setPage(Math.max(1,page-1))} disabled={page===1}>Previous</button>
      {pages.map(p => (
        <button key={p} className="btn" onClick={()=>setPage(p)} style={{background: p===page? '#0056b3': undefined}}>{p}</button>
      ))}
      <button className="btn" onClick={()=>setPage(Math.min(totalPages,page+1))} disabled={page===totalPages}>Next</button>
    </div>
  )
}
