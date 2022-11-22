import strawberryImage from "../assets/strawberry.png"
import CropDetailsContainer from "../components/styled/CropDetailsContainer.styled";
const Strawberry = () => {
  return (
    <div>
   
          <CropDetailsContainer>
          <img width="17%" src={strawberryImage} alt="strawberry" />
          </CropDetailsContainer>
      
    </div>
  )
}

export default Strawberry