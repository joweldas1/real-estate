import {useParams , useLoaderData} from 'react-router-dom'
const HomeDetail = () => {
    const {id}=useParams()
    const homeId=parseInt(id)
    const houses=useLoaderData()
    console.log(houses);    const home=houses.find((homes)=>homes.id===homeId)
    const{area , description , estate_title , facilities  , image , location , price , segment_name , status    }  = home

    return (
        <div className='grid grid-cols-5'>
            <div className='col-span-4 '>
                <img src={image} className='w-full' alt="" />
                <h1 className="text-5xl font-semibold my-3 ">{estate_title }</h1>
                <p className='text-xl font-normal '>{description}</p>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mt-5">

                <div className="card-body ">
                 <h1 className='font-bold text-xl'>Details :</h1>
                 <hr/>
                 <h className="text-lg "> <span className='font-semibold'>Name:</span> {estate_title } </h>
                 <h2 className='text-lg'> <span className='font-bold'>Location :</span> {location}</h2>
                 <h2 className='text-lg'> <span className='font-bold'>Status :</span> {status}</h2>
                 <h2 className='text-lg'> <span className='font-bold'>Area  :</span> {area}</h2>
                 <h2 className='text-lg'> <span className='font-bold'>Area Type  :</span> {segment_name}</h2>
                 <h2 className='text-lg font-semibold'>Facilities</h2>
                 {
                    facilities.map((f ,idx)=>       <h2 key={idx} className='text-base'> <span className='font-bold'>- </span> {f}</h2>  )
                 }
                <h2 className='text-lg'> <span className='font-bold'>Rent Price :</span> {price}</h2>
                </div>
                </div>

  
            </div>
            <div className='bg-green-300'></div>
        </div>
    );
};

export default HomeDetail;