import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide from '../../../public/slider.json'
import 'animate.css';
import { useEffect, useState } from 'react';


const HeroSlider = () => {
    const [scrooling,setScrolling]=useState(false)
    useEffect(()=>{
        if(scrooling){
            window.scrollTo({
                top:document.body.scrollHeight,
                behavior:'smooth',
            })
        }
        setScrolling(false);
    },[scrooling])


    const scrool=()=>{
        setScrolling(true)
        console.log('yes');
    }

    return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => ('')}
          speed={1000}
          autoplay={{ delay: 2000 }}

        >
         {
                slide.map((slide,idx)=>  <SwiperSlide  key={idx}>
                    <div style={{background:` linear-gradient(to right, rgba(1, 1, 9, 0.8) 10%, rgba(24, 2, 2, 0.6) 20%) , url(${slide.image})`, height:`calc(100vh - 70px)`}} className=' w-full text-center bg-no-repeat bg-contain bg-center'>

                        <div className='flex flex-col items-center justify-center h-full'>
                            <h1 className=' text-4xl mx-4 md:text-6xl lg:text-7xl  bg-300%  bg-gradient-to-r from-purple-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient font-semibold'
                            >{slide.title}</h1>
                            <p className='animate__animated animate__backInRight animate__delay-1s text-xl lg:w-1/2 text-center my-6 text-white'>{slide.description}</p>
                            <div className='animate__animated animate__backInUp animate__delay-1s '>
                            <button onClick={scrool} className='btn  btn-info'>Contact</button>
                  
                            </div>
                            

                               
                        </div>

                    </div>

                </SwiperSlide>)
         }
  
        </Swiper>
      );
};

export default HeroSlider;
