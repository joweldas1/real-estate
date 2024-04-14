import { useEffect, useState } from "react";
import RentableHomeShow from "./RentableHomeShow";

const RentableHome = () => {
const [homes,setHomes]=useState([])
useEffect(() => {
    fetch('https://raw.githubusercontent.com/joweldas2/rentalHome/main/rental.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => setHomes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


 
    return (
      <>
       <h1 className='text-center mt-16 text-4xl md:text-5xl font-medium mb-4'>Available Flats & Cottages</h1>
        <div className="grid lg:grid-cols-3 gap-5 mt-10">


          
            {
                homes.map((home)=>( 
                    <RentableHomeShow key={home.id} home={home} />
                ))




            }

        </div>
        </>
    );
};

export default RentableHome;