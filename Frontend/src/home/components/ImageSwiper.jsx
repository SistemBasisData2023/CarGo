// import { register } from 'swiper/element/bundle';

// register();

// const ImageSwiper = () => {
//   return (
//     <swiper-container slides-per-view="auto" speed="500" loop="true" css-mode="true" navigation="true">
//       <swiper-slide>Slide 1</swiper-slide>
//       <swiper-slide>Slide 2</swiper-slide>
//       <swiper-slide>Slide 3</swiper-slide>
//       ...
//     </swiper-container>
//   )
// }

// export default ImageSwiper;

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

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
      <Slide indicators='true'>
        {
          images.map(image => (
            <div key={image.name} className="each-slide-effect">
              <div style={{'backgroundImage' : `url(${image.src})`}}></div>
            </div>
          ))
        }
      </Slide>
    </div>
  )
}

export default ImageSwiper;