"use client"

import { useState, useEffect } from "react";
import axios from "axios";

const UpdateProduct = (props) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState()

    const id = props?.params?.updateproduct;
    console.log("id is", id)

    useEffect(() => {
        getSingleUser()
    }, [id])

    const getSingleUser = async () => {
        const responce = await axios.get(`http://localhost:3000/api/products/${id}`)
        const result = responce.data.result
        setName(result.name)
        setEmail(result.email)
        setAge(result.age)
        console.log("result is", result)
    }


    const updateproduct = async () => {
        try {
            console.log("Updating product...");
            const payload = {
                name,
                email,
                age,
            };

            const response = await axios.put(`http://localhost:3000/api/products/${id}`, payload);
            console.log("Response:", response.data);
            alert("Successfully updated the record!");
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };



    return (
        <>
            <h1> Update Product Form</h1>
            <input placeholder="Enter your name" type="text" value={name} onChange={((e) => setName(e.target.value))} />

            <br></br><br></br>
            <input placeholder="update age" value={email} onChange={((e) => setEmail(e.target.value))} />
            <br></br><br></br>
            <input placeholder="update email" value={age} onChange={((e) => setAge(e.target.value))} />
            <br></br><br></br>
            <button onClick={updateproduct}>Update Product</button>

        </>
    )


}

export default UpdateProduct