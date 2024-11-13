import {Roboto} from "next/font/google"
const roboto = Roboto({
    weight:"100",
    subsets:['latin'],
    display:'swap'
})
const FontOptimization=()=>{

    return(

        <>
        
        <h1>Font Optimization</h1>

        <h1 style={{fontFamily:'Roboto' , fontWeight:100}}>Here apply fontOptimize</h1>

        <h1 className={roboto.className}>Here online font </h1>
        
        </>
    )
}

export default FontOptimization