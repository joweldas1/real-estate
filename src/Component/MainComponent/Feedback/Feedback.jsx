    import React, { useEffect, useState } from 'react';
    import "slick-carousel/slick/slick.css";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
import {Autoplay, A11y, Navigation, Pagination} from 'swiper/modules';



    const Feedback = () => {
        const shadowS={shadow:'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'}
        const [feedback,setFeedback]=useState([])
        useEffect(()=>{
            fetch('feedbackUser.json')
            .then(res=>res.json())
            .then(data=>setFeedback(data.feedback))
            .catch(error=>console.log(error))
        },[])
        console.log(feedback);
       
        return (
            <>
              <div>
            <h1 className='text-center mt-10 text-5xl font-medium mb-4'>Our Customers Feedback</h1>
        </div>
            <Swiper
            modules={[Autoplay,Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl:null,
              prevEl:null,
            }}
            autoplay={{ delay: 2000, pauseOnMouseEnter:true}}
  
            loop={true}
            effect="cube"
            pagination={{
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '" style="background-color: blue;"></span>';
              }
            }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => ('')}
            onSlideChange={() => ('')}
            speed={1000}
    >
      

{feedback.map((feed, idx) => (
               <SwiperSlide key={idx}>
                <div  className='mx-2 ' style={shadowS}>
                <div className="card w-full md:w-1/2  my-2 bg-base-100 shadow-xl border border-black text-center mx-auto">
                    <div className="card-body">
                    <div >
                        <h5 className="h-40 font-normal ">{feed.comment}</h5>
                        <div>
                        <img
                            width={70}
                            className="rounded-full ring-1 mx-auto mt-5 ring-lime-500 shadow-xl"
                            src={feed.user_image}
                            alt=""
                        />
                        </div>
                        <p>{feed.user_name}</p>
                        <p>{feed.user_occupation}</p>
                    </div>
                    </div>
                </div>
                </div>

               </SwiperSlide>
            ))}


             </Swiper>
             
             </>
        )
    };

    export default Feedback;