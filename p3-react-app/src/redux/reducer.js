import { v4 as uuidv4 } from 'uuid';


const initialState = { 
    profileData: [
    {
        id: 1,
        location: "Baguio City",
        name: "Julie M.",
        rating: 5,
        img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"
    },
    
    {
        id: 2,
        location: "Dagupan City",
        name: "Jesaira R.",
        rating: 4,
        img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png"
    },
    
    {
    id: 3,
    location: "Boracay",
    name: "Julaina R.",
    rating: 5,
    img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png"
    },
    
    {
        id: 4,
        location:"Palawan",
        name: "Nigel R.",
        rating: 3,
        img: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png"
        },
    
    
    ]};

// const store = createStore(reducer, initialState) 


const reducer = (state={profileData:[]}, action) => {

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
       return {...state, profileData: [...state.profileData, newUser] };
       default: 
       return state;
           
    }
}

export default reducer;