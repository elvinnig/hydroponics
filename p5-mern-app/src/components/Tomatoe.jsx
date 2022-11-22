import tomatoeImage from "../assets/tomatoe.png"
import CropDetailsContainer from "../components/styled/CropDetailsContainer.styled";



const Tomatoe = () => {
  return (
    <div className>
      
          <CropDetailsContainer>
          <img width="17%" src={tomatoeImage} alt="tomatoe" />
          </CropDetailsContainer>
   
    </div>
  )
}

export default Tomatoe