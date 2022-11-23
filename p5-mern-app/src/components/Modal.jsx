
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-contents: center;
    p {
        padding: 0px;
        margin: 4px;
    }
    textarea {
        // border: 3px;
        background-color: lightgray;      
        margin-button:2px
    }
    //  button {
    //      margin-button: 4px;
    }
`;

const Modal = ({ open, onClose}) => {

    const[status, setStatus] = useState('');
    console.log(status)
    useEffect(() => {
        console.log('hello from status');
        axios.get('http://localhost:8080/api/v1/statuses').then( response => {
          console.log( response );
          setStatus( response.data );
         })
         }, []);
    
    const handleOnClick = (e) => {
         e.preventDefault();
         axios.post('http://localhost:8080/api/v1/statuses',{
            status:status,
        } );

        //  addCommnentFunctionProps(status);
        //  setStatus('')  
    }



  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        {/* <img src={nft} alt='/' /> */}
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <ModalContainer>
          <div className='content'>
            <p>Status:</p>
             <textarea 
                type="text"
                value={status} 
                name=""  
                onChange={(e) => setStatus(e.target.value)} >
            </textarea>
          </div>

          <div className='btnContainer'>
                <button onClick={handleOnClick} className='btnPrimary'>
                <span className='bold'>Submit</span>
                </button>
            
          </div>
            </ModalContainer>
        </div>
      </div>
    </div>
  );
};

export default Modal