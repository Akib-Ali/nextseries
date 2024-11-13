import UserInformation from "@/components/user"

const usegetapi = async () => {

    let data = await fetch("https://dummyjson.com/users")
    data = await data.json()
    return data.users
}


const UserList = async() => {

    const userlist = await usegetapi()
    console.log("userlist is here" , userlist)
    

    return (

        <>
            <h1> User list is here</h1>
            <UserInformation/>

            {userlist.map((elem,index)=>(
                <h3>{`User First Name  : ${elem.firstName}`}</h3>
            ))}
        </>
    )


}

export default UserList
