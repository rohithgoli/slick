// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import {
  PlanetsSliderContainer,
  SliderContainer,
  Heading,
} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <PlanetsSliderContainer data-testid="planets">
      <SliderContainer>
        <Heading>PLANETS</Heading>
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <div key={eachPlanet.id}>
              <PlanetItem planetDetails={eachPlanet} />
            </div>
          ))}
        </Slider>
      </SliderContainer>
    </PlanetsSliderContainer>
  )
}

export default PlanetsSlider
