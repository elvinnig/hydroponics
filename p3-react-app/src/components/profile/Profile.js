import {useState} from 'react';
import "./Profile.css";
import {profileData} from "./profile-data";
import {FaStar, FaTrashAlt} from "react-icons/fa";

 
const Profile = () => {
    const [ userProfile, setUserProfile]
    = useState( profileData);

    const [search, setSearch] = useState("");
const removeProfile = (id) => {
    console.log(id);
    const newProfileList = userProfile.filter((profile) =>
    profile.id !== id)
    setUserProfile(newProfileList);


}; 

const handleInputChange = e => {
    setSearch(e.target.value)
};


const [counter, setCounter] = useState(0);
const rating = (id) => {
userProfile.map(profile => {
    profile.id++;
    setCounter(counter++)

 })   
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
            <button>Add</button>
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
                    <p className='--text-light' key={profile.id}>  {profile.rating}  
                    <FaStar size={16} className="star" onClick={() => rating(profile.id)}  /> 
                     Rating</p>
                    <p className='--text-light'>Job: {profile.job}</p>
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
