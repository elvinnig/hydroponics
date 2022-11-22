import lettuceImage from "../assets/lettuce.png"
import CropDetailsContainer from "../components/styled/CropDetailsContainer.styled";

const Lettuce = () => {
  return (
    <div className="crop-container">
      
          <CropDetailsContainer>
          <img width="17%" src={lettuceImage} alt="lettuce" />
          <button>+</button>
          </CropDetailsContainer>
      
    </div>
  )
}

export default Lettuce