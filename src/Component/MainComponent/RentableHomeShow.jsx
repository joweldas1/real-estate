import React from 'react';
import { Link } from 'react-router-dom';

const RentableHomeShow = ({home}) => {
    const {area , description , estate_title , facilities , id , image , location , price , segment_name , status    }  = home
    return (
        <div>
           <div className="border-slate-400 border p-1  shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
		</div>
        <div className='flex justify-between'>
            <h1 className='text-lg font-semibold'>{area}</h1>
            <h1 className='text-lg font-semibold'>{location}</h1>
        </div>
		<div className="space-y-2">
        <h3 className="text-xl font-semibold dark:text-violet-600">{estate_title}</h3>
			<p className="leading-snug dark:text-gray-600 h-24"> {description.slice(0,150)} 
            <Link to={`/home/${id}`} className='text-blue-800 font-semibold' > see more</Link>
            </p>
		</div>
	</div>
</div>
        </div>
    );
};

export default RentableHomeShow;