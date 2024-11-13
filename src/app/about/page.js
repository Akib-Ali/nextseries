"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

const About=()=>{
    const route = useRouter()

    return(

        <>
        <h1>About Us Page</h1>

        <Link href="/">Go Home Linking</Link>
        <br></br> <br></br>
        <button onClick={()=>route.push("/")}>Go To home through buttoon</button>
        </>
    )


}

export default About