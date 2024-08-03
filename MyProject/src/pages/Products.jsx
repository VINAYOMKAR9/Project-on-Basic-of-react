import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'


const URL = `https://jsonplaceholder.typicode.com/posts`
const  getdata = async(page)=>{
    return await axios.get(URL,{
        params:{
            _page:page,
        _limit:10
        }
    })

}


const Products = () => {
    const [page,setPage]= useState(1)
    const [data,setData]= useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError]= useState(false)

useEffect(()=>{
    setLoading(true)

    getdata(page).then((res)=>{
        setLoading(false)
        setData(res.data)    
        setError(false)
    }).catch((err)=>{
        setLoading(false)
        setError(true)
        setData([])
    });
},[page])

console.log(data)


  return (
    <div>
        <h1>Products</h1>

        {loading && <h1>Loading...</h1>}
        {error&& <h1>Something went wrong...</h1>}
        
        <div>
            {
                data && data.map((el)=>{
                    return (
                        <ProductCard key={el.id} {...el} />
                    )
                })
            }
        </div>

    </div>
  )
}

export default Products
