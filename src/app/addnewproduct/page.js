"use client"
import axios from "axios";
import { useState } from "react"

const Page = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = async () => {
        try {
            const responce = await axios.post("http://localhost:3000/api/products",
                {
                    name,
                    age,
                    email
                })
            alert("successfuly post data")

        } catch (error) {
            console.log("error in catch block", error)

        }


    }


    return (
        <>
            <h1> Add New Product</h1>

            <input placeholder="Enter your name" type="text" value={name} onChange={((e) => setName(e.target.value))} />
            <br></br> <br></br>

            <input placeholder="Enter your age" type="number" value={age} onChange={((e) => setAge(e.target.value))} />
            <br></br><br></br>

            <input placeholder="Enter your email" type="string" value={email} onChange={((e) => setEmail(e.target.value))} />

            <br></br> <br></br>

            <button onClick={handleSubmit}>Submit</button>
        </>
    )

}


export default Page