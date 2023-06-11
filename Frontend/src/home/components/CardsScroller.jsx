import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper';

import axios from 'axios';

import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';


const CardsScroller = () => {
  const [cards, setCards] = useState([]);

  const getAllCar = async () => {
    try{
      const resp = await axios.get('http://localhost:3000/getAllMobil');

      await setCards(resp.data);

    }catch(err){
      console.log(err);
    }
  }

  useMemo(() => {
    getAllCar();
  }, [])

  return (
    <div className="container w-screen mx-auto">
      <Swiper 
        effect={ 'coverflow' } 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={ 3 }
        slidesPerGroup={ 1 }
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{el:'.swiper-pagination', clickable: true, dynamicBullets: true}}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        {
          cards.map((card) => (
            <SwiperSlide key={card.id_mobil} className='h-60 w-96'>
              <Link to={`/description/${card.id_mobil}`}>
                <img src={card.image_url} alt={card.id_mobil} className='object-cover h-full w-full'/>
              </Link>
            </SwiperSlide>
          )) 
        }
        <div className='slider-controller'>
          <div className='swiper-pagination' />
        </div>
      </Swiper>
    </div>
  )
}

export default CardsScroller;