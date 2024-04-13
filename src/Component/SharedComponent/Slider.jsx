import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import slide from '../../../public/slider.json'

const HeroSlider = () => {
    return (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => ('')}
        >
         {
                slide.map((slide,idx)=>  <SwiperSlide  key={idx}>
                    <div style={{background:` linear-gradient(to right, rgba(1, 1, 9, 0.8) 10%, rgba(24, 2, 2, 0.6) 20%) , url(${slide.image})`, height:`calc(100vh - 70px)`}} className=' w-full text-center bg-no-repeat bg-contain bg-center'>

                        <div className='flex flex-col items-center justify-center h-full'>
                            <h1 className='text-4xl mx-4 md:text-6xl lg:text-7xl font-semibold text-white'>{slide.title}</h1>
                            <p className='text-xl lg:w-1/2 text-center my-6 text-white'>{slide.description}</p>
                            <button className='btn btn-info'>Contact</button>
                            

                               
                        </div>

                    </div>

                </SwiperSlide>)
         }
  
        </Swiper>
      );
};

export default HeroSlider;
