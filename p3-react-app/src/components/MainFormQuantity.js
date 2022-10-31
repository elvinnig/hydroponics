// import  { useState } from 'react';

// const MainFormQuantity = (onAddItemFormProps) => {
//     const [ count, setcount] = useState('');
// }

// const onAddItemFormHandller = (event) => {
//     event.preventDefault();
//     let newItem = {
//         count,
//         image
//     };

//     if( count.trim() === '' || image.trim() === '' ){
//         setErrorMessage('count or Image URL required!');
//     }else{
//         onAddItemFormProps( newItem );

//         // Clear form
//         clearForm();
//     }
    

// }
//       return (
    
//            <>
//             <form onSubmit={ onAddItemFormHandler } >
//                 <label htmlFor="number">count:</label>
//                 <input  
//                     type='number'
//                     count='count'
                   
//                     value={ count }
//                     onChange={ e => setcount(e.target.value) } 
//                 />
//                     <NewItemButton
//                     type='submit'    
//                 >
//                     + Add Item
//                 </NewItemButton>
//             </form>
//             <small>{ errorMessage }</small>
//         </>
   

//         )

// export default MainFormQuantity