import cookCoverImage from './images/cooking image cover.webp'
let MainCover=()=>{

    return(

        <div>
            {/* starting of cover imgage of cooking  */}

            <div
  style={{
    backgroundImage: `linear-gradient(rgb(0 0 0 / 74%), rgb(0 0 0 / 71%)), url(${cookCoverImage})`,
    height: '600px',
    borderRadius: '40px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflow: 'hidden',
  }}
>


<div className='flex flex-col items-center justify-center h-screen space-y-4 text-center'>
  <h2 style={{ color: 'white' }}>Discover an exceptional cooking class tailored for you!</h2>
  <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, corporis.</p>

  <div className='flex gap-4'>

  <button className='btn'>Explore Now</button>
  <button className='btn'>Our Feedback</button>
  </div>
  
</div>




</div>


        </div>
    )
}

export default MainCover;