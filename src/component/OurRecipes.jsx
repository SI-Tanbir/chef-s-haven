
import Recipes from "./Recipes";
let OurRecipes=()=>{

    return(
        <div>

        {/* staring div */}



         {/* staring of our recipes content  */}
        <div className="m-14 text-center">

       
        <h3 className="text-3xl font-bold">Our Recipes</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum dolor rem, facilis autem enim quo blanditiis aliquam vitae voluptatem eos.</p>

        </div>

 


            <div className="flex">




       {/* staring of card here  */}





       <div className="">



    <Recipes></Recipes>




        </div>


        {/* starting of want to cook */}

<div className="mt-0  ">


<div className="card bg-base-100 w-96 shadow-xl">
  
  <div className="card-body ">
    <h2 className="card-title">Want to Cook :01</h2>
    <hr />

    <div >
        <ul className="flex gap-5">
            <li>Name</li>
            <li>Time</li>
            <li>Calories</li>
        </ul>

        
    </div>
  


    <div className="card-actions">
      <button className="btn bg-[#0BE58A]">Preparing</button>
    </div>


  </div>
</div>



</div>




            </div>



{/* end of div */}
      </div>  

    )
}
export default OurRecipes;