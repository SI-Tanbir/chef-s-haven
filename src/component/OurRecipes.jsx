import { CiClock2 } from "react-icons/ci";
import { HiFire } from "react-icons/hi";
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

<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">Spaghetti Bolognese</h2>
    <p>Classic Italian pasta dish with savory meat sauce.</p>


    <h2 className="card-title">Ingredients: 6</h2>

    <ul className="list-disc	">
        <li className="ml-8">500g ground beef</li>
        <li className="ml-8">1 onion, chopped</li>
        <li className="ml-8">2 cloves garlic, minced</li>
    </ul>




 <div className="flex">
 <span className="text-2xl"><CiClock2 /></span>
 <p>Time</p>
 
 </div>


<div className="flex">
 <span className="text-2xl"><HiFire /></span>
 <p>Calories</p>
 
 </div>

    <div className="card-actions">
      <button className="btn bg-[#0BE58A]">Want to Cook</button>
    </div>
  </div>
</div>






        </div>


        {/* starting of want to cook */}

<div className="mt-0  ">


<div className="card bg-base-100 w-96 shadow-xl">
  
  <div className="card-body ">
    <h2 className="card-title">Want to Cook :01</h2>
    <hr />
  


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