import React from 'react'

const Pagination = ({page,setPage,totalPage=11}) => {
  return (
    <div>
      <button onClick={()=> setPage((prev)=> prev - 1)} disabled={page<=1}>Prev</button>
      <b>-{page}-</b>
      <button onClick={()=> setPage((prev)=> prev + 1)}>Next</button>
        {new Array(totalPage).fill(0).map((_,i)=>(
            <button key={i+1} onClick={()=> setPage(i + 1)}>
                {i + 1}
            </button>
        ))

        }
    
    </div>
  )
}

export default Pagination
