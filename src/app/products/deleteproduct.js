"use client"

import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteProduct = (props) => {
    console.log("id in delete component", props)
    const id = props.id;
    const router = useRouter()

    const handleDelete = async () => {
        try {
            const responce = await axios.delete(`http://localhost:3000/api/products/${id}`)
            alert("One Item delete successfully")
            router.push("/products")
        } catch (error) {
            console.log("error", error)
        }

    }



    return (
        <>
            <button onClick={handleDelete}>Delete Item</button>
        </>
    )

}

export default DeleteProduct