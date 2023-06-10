
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
    <div id="hero-car-images" className="slide-container">
      <div className="w-64 carousel mx-16">
        {
          heroImages.map(image => {
            return (
              <div key={image.name} className="carousel-item w-fit">
                <img src={image.src} className="w-fit"></img>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default HeroCarousel;