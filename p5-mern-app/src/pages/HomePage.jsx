import { useState, useEffect } from "react";
// import Lettuce from "../components/Lettuce";
// import Tomatoe from "../components/Tomatoe";
// import Strawberry from "../components/Strawberry";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import CropDisplay from '../components/CropDisplay';
import styled from 'styled-components';
// import CropDetailsContainer from "../components/styled/CropDetailsContainer.styled";

const HomePageContainer = styled.div`
    // height: 100vh;
    height: 100%;
    width: 100vw;
    // background-color: rgba(0,0,0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        color: white;
    }
`;

const CalcFormulation = styled.div`
    height: 200px;
    width: 200px;
    background-color: lightgray;
    position: fixed;
    top: 350px;
    left: 0, 
    display:flex;
    flex-direction: column;
    align-content: center;

    h6 {
      text-align: center;
    }

`;
// const InputCalcContainer = styled.div`
//     width-max: 50px;
// `;

const HomePage = () => {

  const [fix, setFix] = useState(false);

  const[lettuceImageVisible, setLettuceImageVisible] = useState(false);
  const[tomatoeImageVisible, setTomatoeImageVisible] = useState(false);
  const[strawberryImageVisible, setStrawberryImageVisible] = useState(false);

  const [count, setCount] = useState("");
  const [crop, setCrop] = useState();
  const [list, setList] = useState([]);

  const [plants, setPlants]= useState( null );


    function setFixedSidebar() {
      if(window.scrollY >= 500) {
        setFix(true)
      } else {
        setFix(false)
      }
    }

    useEffect(() => {

      

      console.log('hello from useEffect');
      axios.get('http://localhost:8080/api/v1/plants').then( response => {
        console.log( response );
        setPlants( response.data );
      })
    }, []);
  
    // State
    const [ tasks, setTask ] = useState([]);
  

    window.addEventListener("scroll", setFixedSidebar)

    useEffect(() => {
        crop === "lettuce" ? setLettuceImageVisible(true) : setLettuceImageVisible(false);
        crop === "tomatoe" ? setTomatoeImageVisible(true) : setTomatoeImageVisible(false);
        crop === "strawberry" ? setStrawberryImageVisible(true) : setStrawberryImageVisible(false);
    }, [crop]);

  const handleSubmit = (e) => {
    e.preventDefault();



    //print
    const data = { count, crop:crop };
    const array = { length: { count } };

    // console.log(data);
    // console.log(array);

    if (crop && count) {
      setList((ls) => [...ls, data]);
      setCount("");
      // setCrop("");
    }
  };
  useEffect(() => {
    console.log(plants);
  }, [plants]);
 

  return (
    <> 
    <CalcFormulation>
        <h6>Formulation</h6>
      {/* <div>  */}
        <label>Water <i>(L)</i>:</label>
        <input/>
        <label>Solution A <i>(ml)</i>:</label>
        <input/>
        <label>Solution B <i>(ml)</i>:</label>
        <input/>
        
{/*     
      </div>  */}
      </CalcFormulation>
    <HomePageContainer>
{/* 
      {lettuceImageVisible && <Lettuce />}
      {tomatoeImageVisible && <Tomatoe />}
      {strawberryImageVisible && <Strawberry />} */}

       {/* <CropDetailsContainer> */}
       <form onSubmit={handleSubmit} className="form-container">
        <select value={crop} onChange={(e) => setCrop(e.target.value)}>
          <option value="selectCrop">Select Crop</option>
          <option value="lettuce">Lettuce</option>
          <option value="tomatoe">Tomato</option>
          <option value="strawberry">Strawberry</option>
        </select>

        <input
          type="number"
          name="count"
          placeholder="Quantity"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button>Plant</button>
      </form>
      {/* </CropDetailsContainer> */}
      
      

      {list.map((item) => {
        return Array(Number(item.count))
        .fill( item.crop )
        .map((cropItem) => <p><CropDisplay cropName={ cropItem } /></p>
        );
      })}

      {/* {
        plants.map( plant => {
          plant.statuses.map( status => {
            console.log(plant.image)
            return (<div>
              <img src= {plant.image}/>
              </div>)
          })
        })
      } */}

      </HomePageContainer>
    </>
  );
};
export default HomePage;


















// import { useSelector } from 'react-redux';

// // Styled Components
// import TaxiDetailsContainer from '../components/styled/TaxiDetailsContainer.styled';
// import { DangerButton } from '../components/styled/Button.styled';

// // Routing
// import { useParams } from 'react-router';

// const HomePage = () => {
//     // const { status } = useParams();
//     // const taxis = useSelector( state => state.taxis );
//     // const filteredTaxis = taxis.filter( taxi => {
//     //     if( status === 'all' ){ return taxi; }
//     //     else{
//     //         return taxi.status === status;
//     //     }
//     // });
//     // console.log( filteredTaxis );
//     return (
//         <div className='flex justify-evenly'>
//             {
//                 filteredTaxis.map( taxi => {
//                     return (
//                         <TaxiDetailsContainer>
//                             <h2>{ taxi.plateNumber }</h2>
//                             {
//                                 taxi.status == 'open' &&
//                                 <DangerButton>
//                                     Hire
//                                 </DangerButton>
//                             }
//                         </TaxiDetailsContainer>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default HomePage