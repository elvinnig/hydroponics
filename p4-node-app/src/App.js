import "./App.css";
import Profile from "./components/profile/Profile";
import {Routes, Route} from 'react-router-dom';
import AddUser from "./components/profile/AddUser";
import Navigation from './components/Navigation';
import Faq from "./components/faq/Faq";
import Login from "./components/login/Login";
// import Faq from "./components/faq/Question";
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
	const [ formVisible, setFormVisible ] = useState( false );
	
	useEffect(() => {
		console.log('hello from useEffect');
		axios.get('http://localhost:8080/api/v1/guides').then( response => {
		  console.log( response );
		  setGuide( response.data );
		})
	  }, []);

 // State
 const [ guides, setGuide ] = useState([]);

	  
  return (
	<>
	<Navigation />
	<Routes>
		<Route path='/' element= {<Login/>}/>
		<Route path="/profile" element= {<Profile />}/>
		<Route path="/add" element= {<AddUser />}/>
		<Route path="/faq" element= {<Faq />}/> 
	</Routes>

	</>
  )
}

export default App