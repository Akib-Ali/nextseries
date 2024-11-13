import { getUsersapi } from "../../../services/getuserapi"
import Link from "next/link"
const getUsersListing = async () => {
    let userlisting = await getUsersapi()
    let listing = userlisting?.users

    console.log("user listing is here", userlisting)

    return (

        <>
            <h1>Get User Listing with services folder</h1>
            {listing.map((elem, index) => {
                return (
                    <>
                        <h1>{`User Name : ${elem.firstName}`}</h1>
                        <Link href={`getuserservices/${elem.id}`}>get Detail</Link>
                    </>
                )
            })}
        </>
    )


}

export default getUsersListing