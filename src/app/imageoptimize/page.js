import Image from "next/image"
import logo from "../../app/favicon.ico"

const ImageOptimize=()=>{

    console.log("image logo", logo)

    return(
        <>
         <h1>Here Learn Image Optimize</h1>
         <Image src={logo}/>
         <img src={logo.src} />
         <Image src="https://plus.unsplash.com/premium_photo-1667480556784-a8f27e62104c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGR1bW15fGVufDB8fDB8fHww" height={200} width={200}/>
         
        </>
    )



}

export default ImageOptimize