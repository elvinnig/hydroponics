import { v4 as uuidv4 } from 'uuid';


import initialData from '../components/profile/profile-data.json';

const initialState = {
    profileData: initialData
}

// import axios from 'axios';
// import { useEffect, useState } from 'react';


// const [ formVisible, setFormVisible ] = useState( false );
	
// 	useEffect(() => {
// 		console.log('hello from useEffect');
// 		axios.get('http://localhost:8080/api/v1/guides').then( response => {
// 		  console.log( response );
// 		  setGuide( response.data );
// 		})
// 	  }, []);

//  // State
//  const [ guides, setGuide ] = useState([]);



const reducer = (state= initialState, action) => {

    switch (action.type){
        case 'ADD':

            let newUser = {
                id: uuidv4(), 
                name: action.payload.name, 
                location: action.payload.location,
                image: action.payload.image,
                rating: action.payload.rating
            }
            console.log(newUser) 
            return {...state, profileData: [newUser, ...state.profileData, ] };

        case 'DELETE':
            return {...state, profileData: state.profileData.filter(data => data.id !== action.payload)}

        case 'ADD_RATING':
            const rating = state.profileData.map(data => {
                if (data.id === action.payload){ data.rating = data.rating + 1}
               
            })
            return {...state, profileData: [...state.profileData, rating]}

       default: 
       return state;
           
    }
}

export default reducer;