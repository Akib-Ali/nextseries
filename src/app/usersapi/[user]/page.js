async function fetchuserapi(id) {
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json()
    return data

}


async function User({ params }) {
    const id = params.user;

    const result = await fetchuserapi(id)
    const singleuserdata = result.result

    console.log("is result" , singleuserdata)
    // const data = result[0]

    // console.log("single user result" , data)
    // console.log("single user params", params)
    return (
        <>
            <h1>Get Single User Detail</h1>
             <p>Name : {singleuserdata.name}</p>
            <p>Age : {singleuserdata.aga}</p> 
        </>
    )
}

export default User