import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper';

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const CardsScroller = () => {
  const cards = [
    {title: "Car 1", src: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=431&q=80"},
    {title: "Car 2", src: "https://images.unsplash.com/photo-1616789916189-3a0d215b6122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {title: "Car 3", src: "https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {title: "Car 4", src: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {title: "Car 5", src: "https://images.unsplash.com/photo-1617060167661-95109a9c0013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},  
    {title: "Car 6", src: "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"},
    {title: "Car 7", src: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"},
    {title: "Car 8", src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"},
    {title: "Car 9", src: "https://images.unsplash.com/photo-1502219422320-9ca47798b75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {title: "Car 10", src: "https://images.unsplash.com/photo-1623006772851-a8bf2c47d304?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"},
    {title: "Car 11", src: "https://images.unsplash.com/photo-1608319984133-1d0e5e20988e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"},  
  ];

  return (
    <div className="container w-screen">
      <Swiper 
        effect={ 'coverflow' } 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={ 'auto' }
        loop={true}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper"
      >
          {/* {
            cards.map((card, index) => {
              <img src={card.src} key={index} alt={card.title} />
            })
          } */}
        <SwiperSlide className='w-64'>
          <img src={cards[0].src} alt={cards[0].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[1].src} alt={cards[1].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[2].src} alt={cards[2].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[3].src} alt={cards[3].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[4].src} alt={cards[4].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[5].src} alt={cards[5].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[6].src} alt={cards[6].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[7].src} alt={cards[7].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[8].src} alt={cards[8].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[9].src} alt={cards[9].title} className="object-fill"/>
        </SwiperSlide>
        <SwiperSlide className='w-64'>
          <img src={cards[10].src} alt={cards[10].title} className="object-fill"/>
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
    </div>
  )
}

export default CardsScroller;