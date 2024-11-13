import Link from "next/link"

const StudentData = () => {

    return (

        <>
            <ul style={{marginTop:"30px" , padding:"20px"}}>
                <li>
                    <Link href="/studentlist/1"> Akib</Link>
                </li>
                <li>
                    <Link href="/studentlist/2">Amil</Link>
                </li>
                <li>
                    <Link href="/studentlist/3">Akil</Link>
                </li>
                <li>
                    <Link href="/studentlist/4">Alshifa</Link>
                </li>
            </ul>
        </>
    )



}


export default StudentData