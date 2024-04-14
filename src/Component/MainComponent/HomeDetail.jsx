import {useParams , useLoaderData} from 'react-router-dom'
const HomeDetail = () => {
    const {id}=useParams()
    const homeId=parseInt(id)
    const houses=useLoaderData()
     const home=houses[homeId-1];


    return (
        <div className=' m-auto '>
            <div className='col-span-4  '>
                <img src={home.image} className='w-full h-auto md:h-screen' alt="" />
                <h1 className="text-5xl font-semibold my-3 mx-2">{home.estate_title }</h1>
                <p className='text-xl font-normal mx-2 '>{home.description}</p>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">

                <div className="card-body m">
                 <h1 className='font-bold text-xl'>Details :</h1>
                 <hr/>
                 <h1 className="text-lg "> <span className='font-semibold'>Name:</span> {home.estate_title } </h1>
                 <h2 className='text-lg'> <span className='font-bold'>Location :</span> {home.location}</h2>
                 <h2 className='text-lg'> <span className='font-bold'>Status :</span> {home.status}</h2>
                 <h2 className='text-lg'> <span className='font-bold'>Area  :</span> {home && home.area}</h2>
                 <h2 className='text-lg'> <span className='font-bold'>Area Type  :</span> {home.segment_name}</h2>
                 <h2 className='text-lg font-semibold'>Facilities</h2>
                { home.facilities.map((f ,idx)=>       <h2 key={idx} className='text-base'> <span className='font-bold'>- </span> {f}</h2>  )}
                <h2 className='text-lg'> <span className='font-bold'>Rent Price :</span> {home.price}</h2>
                </div>
                
                </div>

  
            </div>
          
        </div>
    );
};

export default HomeDetail;