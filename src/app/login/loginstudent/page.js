"use client"
import { useRouter } from "next/navigation"
const LoginStudent=()=>{
    const route = useRouter()

    const navigate =(name)=>{
        route.push(`/${name}`)
    }

    return(
        <>
        <h1>Login Student</h1>
        <button onClick={()=> navigate("")}>Go To Home</button> <br></br> <br></br>
        <button onClick={()=> navigate("about")}>About</button> <br></br><br></br>
        </>
    )
}

export default LoginStudent