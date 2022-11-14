import {useState} from 'react';
import "./Profile.css";
import {FaStar, FaTrashAlt} from "react-icons/fa";
import {MdOutlinePhoneIphone} from "react-icons/md";

import { useSelector, useDispatch } from 'react-redux';

 
const Profile = () => {
    const userProfile = useSelector( state => state.profileData );
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    
const removeProfile = (id) => {
    console.log(id);
    dispatch({type: 'DELETE',payload: id})
  

    // implement in reducer
    // setUserProfile(newProfileList);


}; 

const handleInputChange = e => {
    setSearch(e.target.value)
};


const [counter, setCounter] = useState(0);
const rating = (id) => {
dispatch({type: 'ADD_RATING', payload: id})

 
    console.log(rating)
//        setCounter((prev) => (prev + 1))
//  userProfile.map((profile) => profile.id)
    //  handler(newHandler.id);
};

  return (
    <section className='profile-sec'>
    <div className='container'>
        <h2 className='--text-light'>Personal Tour Guide</h2>
        <div className='--form-control'>
            <input type="text" placeholder='Enter Search location ...' 
            className='--width-100'
            onChange={handleInputChange}
            value={search}
            />
          
        </div> 
        {userProfile.filter((value)=> {
            if (search === "") {
                return value
            } else if (
                value.location.toLowerCase().includes(
            search.toLowerCase()) 
            ) {
                return value;
            }
        }).map((profile) =>(
            <div className='profile --card --flex-between' 
            key={profile.id}>
                <img src={profile.img} alt = "profile" />
                <div className='desc'>
                    <h4 className='--text-light'>Name: {profile.name}</h4>
                    <h5 className='--text-light'>Location: {profile.location}</h5>
                    <p className='--text-light' key={profile.id}>  {profile.rating}{''}  
                    <FaStar size={16 } className="star" onClick={() => rating(profile.id)}  /> 
                     {''} Rating </p>
                    {/* <p className='--text-light'> {profile.job}</p> */}
                    {/* <p>< MdOutlinePhoneIphone size={22} className='phone-icon'/> </p> */}
                    <p className='--text-light'>Profile</p>
                </div>
                 
                <FaTrashAlt size={18} className="icon" //Delete Profile
                onClick={() => removeProfile(profile.id)}/>
            </div>
        )
        )}
    </div>
    </section>
  )
}

export default Profile
