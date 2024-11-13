"use client"
const FindPrice = (props) => {

    console.log("props find price" , props)

    return (
        <>
            <button  onClick={()=> alert(props.price)}>Find Price</button>
        </>
    )
}
export default FindPrice