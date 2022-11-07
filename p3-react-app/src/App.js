import "./App.css";
import Profile from "./components/profile/Profile";
import {Routes, Route} from 'react-router-dom';
import AddUser from "./components/profile/AddUser";
import Navigation from './components/Navigation';
import Faq from "./components/faq/Faq";
import Login from "./components/login/Login";
import SignUp from "./sign-up/SignUp";
// import LandingPage from "./components/landing-page/LandingPage";
import ProfileUser from "./components/profile/ProfileUser";
// import Faq from "./components/faq/Question";

const App = () => {
  return (
	<>
	<Navigation />
	<Routes>
		<Route path='/' element= {<Login/>}/>
		{/* <Route path='/login' element= {<Login/>}/> */}
		<Route path='/sign-up' element= {<SignUp/>}/>
		<Route path="/profile" element= {<Profile />}/>
		<Route path="/add" element= {<AddUser />}/>
		<Route path="/faq" element= {<Faq />}/> 
	</Routes>

	</>
  )
}

export default App