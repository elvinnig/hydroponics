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

    /* False, kasi walang error sa initial load */
    const [ hasError, setHasError ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState('');
  

const submitHandler = (event) => {
  event.preventDefault(); // prevent from page reload
  if((location && name && image).trim() === '') {
    setHasError( true )
    setErrorMessage('Required!');
  }
  else {

  dispatch({type:"ADD", payload: {
    location: location, name: name, image: image, rating: 0
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
        <input className='user-info' name='image' value={image} onChange={(e)=> setImage(e.target.value) }/>
        <button type='submit'>Add</button>
      </form>
    </div>
    </section>
  )
}

export default AddUser