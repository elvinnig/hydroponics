import { useState, useEffect } from "react";
import Lettuce from "../components/Lettuce";
import Tomatoe from "../components/Tomatoe";
import Strawberry from "../components/Strawberry";

const Crop = () => {
  const[lettuceImageVisible, setLettuceImageVisible] = useState(false);
  const[tomatoeImageVisible, setTomatoeImageVisible] = useState(false);
  const[strawberryImageVisible, setStrawberryImageVisible] = useState(false);

  const [count, setCount] = useState("");
  const [crop, setCrop] = useState([]);
  const [list, setList] = useState([]);

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

    console.log(data);
    console.log(array);

    if (crop && count) {
      setList((ls) => [...ls, data]);
      setCount("");
      setCrop("");
    }
  };
  useEffect(() => {
    console.log(list);
  }, [list]);
 

  return (
    <> 
    {lettuceImageVisible && <Lettuce />}
    {tomatoeImageVisible && <Tomatoe />}
    {strawberryImageVisible && <Strawberry />}

        
      <form onSubmit={handleSubmit} className="mt-4">
        <select value={crop} onChange={(e) => setCrop(e.target.value)}>
          <option value="selectCrop">Select Crop</option>
          <option value="lettuce">Lettuce</option>
          <option value="tomatoe">Tomatoe</option>
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
       
      {list.map((item) => {
        return Array(Number(item.count))
        .fill()
        .map((cropItem) => {
          return<ol>{item.crop}</ol>;
        });
      })}
      
    </>
  );
};
export default Crop;


















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