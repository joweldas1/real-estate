import { Link } from 'react-router-dom';


const RentableHomeShow = ({home}) => {
    const {id,description}=home;
    const shadowBox={
        shadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px'
    }
    
    return (
        <div>
           <div style={shadowBox} className="border-slate-400 rounded-md p-1  border mx-1  shadow-md dark:bg-gray-50 dark:text-gray-800">
	
	<div className="space-y-4 ">
		<div className="space-y-2">
			<img src={home.image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
		</div>
        <div className='flex justify-between'>
            <h1 className='text-lg font-semibold'>{home.area}</h1>
            <h1 className='text-lg font-semibold'>{home.location}</h1>
        </div>
		<div className="space-y-2">
        <h3 className="text-xl font-semibold dark:text-violet-600">{home.estate_title}</h3>
			<p className="leading-snug font-light dark:text-gray-600 h-24"> {description.slice(0,150)} 
            <Link to={`/home/${id}`} className='text-blue-800 font-semibold' > see more</Link>
            </p>
		</div>
	</div>
</div>
        </div>
    );
};

export default RentableHomeShow;