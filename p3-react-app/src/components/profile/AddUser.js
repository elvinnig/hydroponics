import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';


const AddUser = () => {
  // Store
  const profileData = useSelector(state => state.profileData);
  const dispatch = useDispatch(); 

  const [location, setLocation] = useState("")
  const [name, setName] = useState ("")
  const [image, setImage] = useState ("")
  

const submitHandler = (event) => {
  dispatch({type:"ADD", payload: {
    location: location, name: name, image: image, rating: 0
  }});
  
}
console.log(profileData)
  return (
    <div>
      <form>
        <label for='location'>Location: </label>
        <input name='location' value={location} onChange={(e)=> setLocation(e.target.value)}/>
        <label>Name:</label>
        <input name ='name' value={name} onChange={(e)=> setName(e.target.value)} />
        <label>Image: </label>
        <input name='image' value={image} onChange={(e)=> setImage(e.target.value) }/>
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  )
}

export default AddUser