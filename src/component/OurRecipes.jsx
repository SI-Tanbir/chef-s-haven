
import { useState } from "react";
import Recipes from "./Recipes";
import WantToCook from "./WantToCook";
let OurRecipes=()=>{
  
  // now we will hold the data
  let [data,setData]=useState([])

  let wantToCookfun=(output)=>{
    let newObject = {output}
    let newdata=[...data,newObject]
    setData(newdata)
  }
  // console.log(data)

    return(
        <div>

       



         {/* staring of our recipes content  */}
        <div className="m-14 text-center">

       
        <h3 className="text-3xl font-bold">Our Recipes</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dolor rem, facilis autem enim quo blanditiis aliquam vitae voluptatem eos.</p>

        </div>

 


            <div className="flex justify-center">




<Recipes wantToCookfun={wantToCookfun}></Recipes>

       {/* staring of card here  */}
    

        {/* starting of want to cook */}
          <WantToCook cookData={data}></WantToCook>



            </div>



{/* end of div */}
      </div>  

    )
}
export default OurRecipes;