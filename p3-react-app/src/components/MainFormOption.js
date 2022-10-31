// import { Component } from 'react';

const MainFormOption = () => {
    const options = [
        {
            "label":"Lettuce",
            "value": "lettuce",
            "image": "https://cdn0.iconfinder.com/data/icons/fastfood-30/64/hamburger-fast-food-fastfood-burger-food-bread-256.png "
        },
        {
            "label":"Cherry Tomatoe",
            "value": "tomatoe",
            "image": "https://cdn0.iconfinder.com/data/icons/fastfood-30/64/hamburger-fast-food-fastfood-burger-food-bread-256.png "
        },
        {
            "label":"Celery",
            "value": "celery",
            "image": "https://cdn0.iconfinder.com/data/icons/fastfood-30/64/hamburger-fast-food-fastfood-burger-food-bread-256.png "
        },
        {
            "label":"Strawberry",
            "value": "strawberry",
            "image": "https://cdn0.iconfinder.com/data/icons/fastfood-30/64/hamburger-fast-food-fastfood-burger-food-bread-256.png "
        }
    ];
  return (
    <form>
   
    <label for="framework">Select a Crop: </label>
            <select>
                {
                options.map(value => {
                    return (<option>{value.label}</option>
               ) })
                }
            </select>
                <label>Quantity: </label>
                <input src = 'number'></input>
                <button>Submit</button>
    </form>
         
  )
}

export default MainFormOption;