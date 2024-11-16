import { useEffect, useState } from "react"
import fooddata from '../assets/foodData.json'
import { CiClock2 } from "react-icons/ci";
import { HiFire } from "react-icons/hi";



let Recipes=({wantToCookfun})=>{

    let [count,setCount]=useState([]);

    useEffect(()=>{
        setCount(fooddata);
    },[])

// console.log(count)


    return(

        <div className="grid grid-cols-2">
          

        {
            count.map((output,index) =>(

              
              

              // starting of recepies card
              <div key={index} className="mb-3 card bg-base-100 w-96 shadow-xl">

    
  <figure className="px-10 pt-10 ">
    <img
      src={output.recipe_image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{output.recipe_name}</h2>
    <p>{output.short_description}</p>


    <h2 className="card-title">Ingredients: {output.ingredients.length}</h2>

    <ul className="list-disc	">
      {
        output.ingredients.map((ing,index) => (
          <li key={index} className="ml-8">{ing}</li>
        ))
      }
    </ul>


 <div className="flex">
 <span className="text-2xl"><CiClock2 /></span>
 <p>Prepared Time: {output.preparing_time}</p>
 
 </div>


<div className="flex">
 <span className="text-2xl"><HiFire /></span>
 <p>Calories: {output.calories}</p>
 
 </div>

    <div className="card-actions">
      <button onClick={()=>wantToCookfun(output)} className="btn bg-[#0BE58A]">Want to Cook</button>
    </div>

  </div>
</div>
                
            ))
        }




            
        






        </div>




    )


}

export default Recipes;