// // import { v4 as uuidv4 } from 'uuid';


// import initialData from 'http://localhost:8080/api/v1/statuses';

// const initialState = {
//     status: initialData
// }

// const reducer = (state= initialState, action) => {

//     switch (action.type){
//         case 'ADD':

//             let newStatus = {
//                 status: action.payload.status, 
               
              
//             }
//             console.log(newStatus) 
//             return {...state, status: [newStatus, ...state.status, ] };

        
//         // case 'DATE':
//         //     const date = state.status.map(data => {
//         //         if (data.id === action.payload){ data.date}
               
//         //     })
//         //     return {...state, profileData: [...state.profileData, rating]}

//        default: 
//        return state;
           
//     }
// }

// export default reducer;

const reducer = ( state = [], action ) => {
   switch( action.type ){
        default:
            return state;
   }
}

export default reducer;
