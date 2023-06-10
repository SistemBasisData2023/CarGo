// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube, Autoplay } from 'swiper';

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube';

const ImageSwiper = () => {
  const images = [
    { name : "Car 1", src : "https://static01.nyt.com/images/2020/10/30/business/30wheels1/30wheels-articleLarge.jpg?quality=75&auto=webp&disable=upscale"},
    { name : "Car 2", src : "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/11/Aston_Martin_DBX_-_Onyx_Black_-_AML_1__3-JPG-600x400.jpg"},
    { name : "Car 3", src : "https://gumlet.assettype.com/swarajya%2F2019-10%2F781a8c14-f5f1-4a6d-a37f-b82b602734f6%2FEF7zyqLUEAADQ6f.jpg?q=75&auto=format%2Ccompress&w=1200"},
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
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{el:'.swiper-pagination', clickable: true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay, EffectCube, Pagination, Navigation]}
        className="swiper"
      >
          {/* {
            cards.map((card, index) => {
              <img src={card.src} key={index} alt={card.title} />
            })
          } */}
        <SwiperSlide className='w-64'>
          <img src={images[0].src} alt={images[0].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={images[1].src} alt={images[1].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={images[2].src} alt={images[2].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={images[3].src} alt={images[3].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={images[4].src} alt={images[4].title} className="object-fill"/>
        </SwiperSlide>
        <div className='slider-controller'>
          <div className='swiper-button-prev slider-arrow'>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className='swiper-button-next slider-arrow'>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className='swiper-pagination' />
        </div>
      </Swiper>
      {/* <Slide indicators='true'>
        {
          images.map(image => (
            <div key={image.name} className="each-slide-effect">
              <div style={{'backgroundImage' : `url(${image.src})`}}></div>
            </div>
          ))
        }
      </Slide> */}
    </div>
  )
}

export default ImageSwiper;