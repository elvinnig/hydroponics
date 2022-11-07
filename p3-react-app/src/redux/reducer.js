import { v4 as uuidv4 } from 'uuid';


import initialData from '../components/profile/profile-data.json';

const initialState = {
    profileData: initialData
}

const reducer = (state= initialState, action) => {

    switch (action.type){
        case 'ADD':

            let newUser = {
                id: uuidv4(), 
                name: action.payload.name, 
                location: action.payload.location,
                image: action.payload.image,
                rating: action.payload.rating,
                description:action.payload.description,
                price: action.payload.price,
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