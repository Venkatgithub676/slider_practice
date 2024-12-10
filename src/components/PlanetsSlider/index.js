// Write your code here

import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
}
const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="slider-con" data-testid="planets">
      <h1 className="planets">PLANETS</h1>
      <Slider {...settings} className="slider-main-con">
        {planetsList.map(each => (
          <PlanetItem each={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
