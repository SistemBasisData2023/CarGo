import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCube, Autoplay } from 'swiper';

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

const ImageSwiper = () => {
  const images = [
    { name : "Car 1", src : "https://static01.nyt.com/images/2020/10/30/business/30wheels1/30wheels-articleLarge.jpg?quality=75&auto=webp&disable=upscale"},
    { name : "Car 2", src : "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/11/Aston_Martin_DBX_-_Onyx_Black_-_AML_1__3-JPG-600x400.jpg"},
    { name : "Car 3", src : "https://www.kendallcars.com/wp-content/uploads/2017/05/skoda-karoq-600x400.jpg"},
    { name : "Car 4", src : "https://media.zenfs.com/en/usa_today_money_325/cadf505c407251739152e7ecf55d0159"},
    { name : "Car 5", src : "https://images.bisnis.com/thumb/posts/2020/10/09/1302813/peugeot_e208_what_car_.jpg?w=600&h=400"},
  ]

  return (
    <div className="slide-container w-[600px] ml-8">
      <Swiper 
        effect={ 'cube' } 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={ 'auto' }
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{el:'.swiper-pagination', clickable: true}}
        modules={[Autoplay, EffectCube, Pagination]}
        className="swiper"
      >
        {
          images.map((card) => (
            <SwiperSlide key={card.name} className='h-[600px] w-[400px]'>
              <img src={card.src} alt={card.name} className='object-cover h-full w-full'/>
            </SwiperSlide>
          )) 
        }
      </Swiper>
    </div>
  )
}

export default ImageSwiper;