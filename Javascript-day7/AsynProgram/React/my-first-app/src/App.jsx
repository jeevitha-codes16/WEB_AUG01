//import React from "react"
//function app(){

  //  let count = 10
//
   // function increaseCount(){
        //count= count +1
      //  console.log(count)
    //}
   // return(
       // <div>
       //     <h2>Like/Cart:{count} </h2>
     //       <button onClick={increaseCount}>Increase</button>
   //     </div>
 //   )
   // }
 //   export default app 




//UseState() - hook in react
// it is SPECIAL React variable - it will strore the updated and also it will update the data/value on UI - S

//Syntax - const [mainVariableName - show on your screen, setVariableName-Updated Value] = useState(initial value)
//import React from "react"
//import{useState} from "react";

//function app(){

    //const[like,setLike] = useSate(17)

    //function IncreaseLike(){
       //( like+1)
      // console.log(like)

    //}


    
    //return(
        //<div>
          //  <h2>Like/Cart:{like} </h2>
        //    <button onClick={IncreaseLike}>Increase</button>
      //  </div>
    //)
    //}
   // export default app 



    //example 3 -
    //import React from "react";

    //function app(){

  //      const[show,Setshow] = useState(false)

//        return(
  //          <div>
    //            <input type={show? "text": "password"} placeholder="enter password"/>
      //         <button onClick={()=> Setshow(!show)} >show/hide</button>
        //     </div>
       // )
    //}

    //export default app


    //example 4 -
     import React from "react";

    function app(){

        const[follow,Setfollow] = useState(false)

        return(
            <div>
                <button onClick={()=> Setfollow(!follow)}>{follow ? "following" : "follow"}</button>
               
             </div>
        )
    }

    export default app
