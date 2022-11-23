import lettuceImage from "../assets/lettuce.png"
import strawberryImage from '../assets/strawberry.png';
import tomatoeImage from '../assets/tomatoe.png';
import commentImage from '../assets/comment.png';
import Modal from './Modal';
import React, { useState } from 'react';
import CropDetailsContainer2 from "../components/styled/CropDetailsContainer.styled";

const CropDisplay = ({ cropName }) => {

  const cropImage = cropName === 'lettuce' ? lettuceImage : ( cropName === 'tomatoe' ? tomatoeImage : strawberryImage ) ; 
  const [openModal, setOpenModal] = useState(false);
  return (
    
    <div className="crop-container" onClick={() => setOpenModal(true)}>
      
          <CropDetailsContainer2 >

            <img width="80%" src={cropImage} alt={`${cropName} image`} />
           
            <img width="20%" top="5%" src={commentImage} alt="comment" />
           
          </CropDetailsContainer2>

          <Modal 
            open={openModal} 
             onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default CropDisplay

