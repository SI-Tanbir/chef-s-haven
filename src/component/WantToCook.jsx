

 let WantToCook=({cookData})=>{

    // console.log(cookData)

    return (


        <div className="card bg-base-100 w-96 shadow-xl">
  
  <div className="card-body ">
    <h2 className="card-title">Want to Cook :01</h2>
    <hr />

    <div >
        <ul className="flex gap-16">
            <li>Name</li>
            <li>Time</li>
            <li>Calories</li>
        </ul>
        {cookData && cookData.length > 0 ? (
            cookData.map((cook, index) => (
              <div key={index} className="flex gap-5 py-1">
                <span>{cook.output.recipe_name}</span>
                <span>{cook.output.preparing_time}</span>
                <span>{cook.output.calories}</span>
                {/* {console.log(cook)} */}
             
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items to cook yet!</p>
          )}

        
    </div>
  


    <div className="card-actions">
      <button className="btn bg-[#0BE58A]">Preparing</button>
    </div>


  </div>
</div>
    )
}


export default WantToCook;
