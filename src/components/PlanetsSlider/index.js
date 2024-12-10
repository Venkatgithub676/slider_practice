// Write your code here

import Slider from 'react-slick'
import {Chrono} from 'react-chrono'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <div className="slider-con">
      <Slider>
        {planetsList.map(each => (
          <PlanetItem each={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
