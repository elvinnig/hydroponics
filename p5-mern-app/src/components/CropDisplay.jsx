import lettuceImage from "../assets/lettuce.png"
import strawberryImage from '../assets/strawberry.png';
import tomatoeImage from '../assets/tomatoe.png';
import commentImage from '../assets/comment.png';
import CropDetailsContainer2 from "../components/styled/CropDetailsContainer.styled";

const CropDisplay = ({ cropName, image}) => {

  const cropImage = cropName === 'lettuce' ? lettuceImage : ( cropName === 'tomatoe' ? tomatoeImage : strawberryImage ) ; 

  return (
    <div className="crop-container">
            {image}
      
          <CropDetailsContainer2>
            <img width="80%" src={cropImage} alt={`${cropName} image`} />
            {/* <button>+</button> */}
            <img width="20%" top="5%" src={commentImage} alt="comment" />
          </CropDetailsContainer2>
      
    </div>
  )
}

export default CropDisplay