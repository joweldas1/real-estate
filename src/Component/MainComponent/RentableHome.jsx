import { useEffect, useState } from "react";
import RentableHomeShow from "./RentableHomeShow";

const RentableHome = () => {
const [homes,setHomes]=useState([])
useEffect(()=>{
    fetch('/public/houses.json')
    .then(res=>res.json())
    .then(data=>setHomes(data))
},[])
console.log(homes);


 
    return (
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
            {
                homes.map((home)=>( 
                    <RentableHomeShow key={home.id} home={home} />
                ))




            }

        </div>
    );
};

export default RentableHome;