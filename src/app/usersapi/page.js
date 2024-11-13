 import Link from "next/link"
 async function fetchuserapi() {
    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json()
    return data

}

 async function Users() {

    const userlisting = await fetchuserapi()
    console.log("user listing here", userlisting)


     
    
    return (
        <>
            <h1> User Listing here</h1>

            {userlisting.map((elem,index)=>{
                return(
                    <div key={index}>
                    <li>{elem.name}</li>
                    <Link href={`usersapi/${elem.id}`}>go user detail</Link>
                    </div>
                )
            })}
        </>
    )

}

export default Users