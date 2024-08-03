import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import LoadingIndicator from './LoadingIndicator'
import ErrorIndicator from './ErrorIndicator'
import Pagination from './Pagination'


const URL = `https://jsonplaceholder.typicode.com/posts`
const  getdata = async(page)=>{
    return await axios.get(URL,{
        params:{
            _page:page,
        _limit:7
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
if(loading) return <LoadingIndicator />
if(error) return <ErrorIndicator />

const handleSubmit=(e)=>{
    e.preventDefault()
    const formData=new FormData(e.target)

    let newData={
        id:data.length +1,
        title:formData.get('title'),
        body:formData.get('body'),
    }
    console.log(newData)
    setData([newData,...data])
    e.target.reset()
    
}

const handleDelete = (id)=>{
    let filterData = data.filter((el)=>el.id != id)
    setData(filterData)
    
}

  return (
    <div>
        <h1>Products</h1>

        <form onSubmit={handleSubmit}>
            <input
             type='text' 
             placeholder='Enter title...'
             name='title'
            />
            <input
             type='text' 
             placeholder='Enter Body...'
             name='body'
            />
            <button type='submit'>Submit</button>

        </form>

        
        <div>
            {
                data && data.map((el)=>{
                    return (
                        <ProductCard key={el.id} {...el} handleDelete={handleDelete} />
                    )
                })
            }
        </div>

        <Pagination page={page} setPage={setPage} totalPage={15} />

    </div>
  )
}

export default Products
