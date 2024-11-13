import { getUsersapi } from "../../../../services/getuserapi"
const getSingleUser= async({params})=>{
    const getuserList = await getUsersapi()
    let listing = getuserList?.users
    const currentid = params.userid
    const userDetail = listing[currentid-1]
    console.log("user detail here" , userDetail)


    // console.log("getuserList" , listing)
  

    return(

        <>
        <h1> Get Single user</h1>

        <p>{`First Name : ${userDetail.firstName}`}</p>
        <p>{`Last Name : ${userDetail.lastName}`}</p>
        <p>{`Age : ${userDetail.age}`}</p>
        <p>{`Gender : ${userDetail.gender}`}</p>



        
        </>
    )

}

export default getSingleUser