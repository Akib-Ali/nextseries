"use client"
import { useEffect, useState } from "react"
import axios from "axios"

const ProductPage = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetchapi()
    }, [])

    const fetchapi = async () => {
        // let data = await fetch("https://dummyjson.com/products")
        // data = await data.json()
        // let result = await data.products
        // setIsList(result)

        //iind method with axios

        const responce = await axios("https://dummyjson.com/products")
        setProducts(responce.data.products)
    }

    console.log("products list is here" , products)



    return (
        <>
             <h1> Product Page listing</h1> 
            {products.map((elem,index)=>{
                return(
                    <div key={index}>
                        <p>{`Title is : ${elem.title}`}</p>
                        <p>{`Price is : ${elem.price}`}</p>
                    </div>
                )
             })} 
        </>
    )

}

export default ProductPage