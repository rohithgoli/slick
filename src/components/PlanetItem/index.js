// Write your code here
import {
  PlanetItemContainer,
  PlanetImage,
  PlanetName,
  PlanetDescription,
} from './styledComponents'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  return (
    <PlanetItemContainer>
      <PlanetImage src={imageUrl} alt={`planet ${name}`} />
      <PlanetName>{name}</PlanetName>
      <PlanetDescription>{description}</PlanetDescription>
    </PlanetItemContainer>
  )
}

export default PlanetItem
