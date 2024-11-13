"use client"
const Lecture=({params})=>{

    console.log("params" , params)

return(

    <>
     <h1> Lecture by Day {params.lecture[0]}</h1>
     <h2>Day by Lecture  {params.lecture[1]}</h2>
    
    </>
)


}

export default Lecture