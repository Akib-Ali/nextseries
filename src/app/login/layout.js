
import "./login.css"
import Link from "next/link"

const Layout = ({ children }) => {



    return (
        <>
            <div >
                <ul className="navbar">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/login/loginteacher">Login Teacher</Link></li>
                    <li><Link href="/login/loginstudent">Login Student</Link></li>
                </ul>
                {children}
            </div>
        </>
    )

}

export default Layout