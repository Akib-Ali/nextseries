import FindPrice from "./button"
import style from "@/style/serverdata.module.css"

const fetchApi = async () => {
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json()
    return data.products
}


const ApiServerComponent = async () => {

    const products = await fetchApi()
    return (
        <>
            <h1 className={style.apiheading}>Api in server component List</h1>
            {products.map((elem, index) => {
                return (
                    <div key={index}>
                        <h3>{`Title is :  ${elem.title}  Brand is : ${elem.brand}`}  </h3>
                         <FindPrice price={elem.price}/>
                    </div>
                )
            })}

        </>
    )
}

export default ApiServerComponent