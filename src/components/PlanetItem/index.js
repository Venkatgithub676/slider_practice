// Write your code here
import './index.css'

const PlanetItem = props => {
  const {each} = props
  return (
    <div className="image-con">
      <img
        className="image-url"
        alt={`planet ${each.name}`}
        src={each.imageUrl}
      />
      <h1 className="name">{each.name}</h1>
      <p className="description">{each.description}</p>
    </div>
  )
}

export default PlanetItem
