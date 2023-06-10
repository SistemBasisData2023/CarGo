import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCards, Autoplay } from 'swiper';

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

import heroCar1 from "/car1-removebg-preview.jpg"
import heroCar2 from "/car2-removebg-preview.jpg"
import heroCar3 from "/car3-removebg-preview.jpg"
import heroCar4 from "/car4-removebg-preview.jpg"
import heroCar5 from "/car5-removebg-preview.jpg"

const HeroCarousel = () => {

  const heroImages = [
    {name : "heroCar1", src : heroCar1},
    {name : "heroCar2", src : heroCar2},
    {name : "heroCar3", src : heroCar3},
    {name : "heroCar4", src : heroCar4},
    {name : "heroCar5", src : heroCar5},
  ]

  return (
    <div className="slide-container w-64 mx-auto">
      <Swiper 
        effect={ 'cards' } 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={ 'auto' }
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, EffectCards, Pagination]}
        className="swiper"
      >
        {
          heroImages.map((card) => (
            <SwiperSlide key={card.name} className='w-64'>
              <img src={card.src} alt={card.name} className='object-cover h-full w-full'/>
            </SwiperSlide>
          )) 
        }
      </Swiper>
    </div>
  )
}

export default HeroCarousel;