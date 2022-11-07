import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './AddUser.css'
import { useNavigate } from 'react-router-dom';


const AddUser = () => {
  // Store
  const profileData = useSelector(state => state.profileData);
  const dispatch = useDispatch(); 
  const navigate = useNavigate();

  const [location, setLocation] = useState("")
  const [name, setName] = useState ("")
  const [image, setImage] = useState ("")
  const [price, setPrice] = useState ("")
  const [description, setDescription] = useState ("")

    /* False, kasi walang error sa initial load */
    const [ hasError, setHasError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState('');
  

const submitHandler = (event) => {
  event.preventDefault(); // prevent from page reload
  if((location && name && image && description).trim() === '') {
    setHasError( true )
    setErrorMessage('Required!');
  }
  else {

  dispatch({type:"ADD", payload: {
    location: location, name: name, image: image,price: price, description: description, rating: 0
  }});
  navigate('/profile');
}}
console.log(profileData)
  return (
    <section className='main-container'>
    <div className='add-new-container' >
      <form className='.form-add' onSubmit={submitHandler}>
        <label for='location'>Location: </label>
        <input className='user-info' name='location' value={location} onChange={(e)=> setLocation(e.target.value)}/>
        <label>Name:</label>
        <input className='user-info' name ='name' value={name} onChange={(e)=> setName(e.target.value)} />
        <label>Image: </label>
        <input  className='user-info' name='image' value={image} onChange={(e)=> setImage(e.target.value) }/>
        <label>Price: </label>
        <input className='user-info' name='price' value={price} onChange={(e)=> setPrice(e.target.value) }/>
        <label>Description: </label>
        <textarea className='user-info' name='description' value={description} onChange={(e)=> setDescription(e.target.value)} />

        <button type='submit'>Add</button>
      </form>
    </div>
    </section>
  )
}

export default AddUser