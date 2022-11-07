import "./App.css";
import Profile from "./components/profile/ProfilePage";
import {Routes, Route} from 'react-router-dom';
import AddUser from "./components/profile/AddUser";
import Navigation from './components/Navigation';
import FaqPage from "./components/faq/FaqPage";
import Login from "./components/login/LoginPage";
import LoginPage from "./components/login/LoginPage";
import ProfilePage from "./components/profile/ProfilePage";


const App = () => {
  return (
	<>
	<Navigation />
	<Routes>
		<Route path='/' element= {<LoginPage/>}/>F
		<Route path="/profile" element= {<ProfilePage/>}/>
		<Route path="/add" element= {<AddUser />}/>
		<Route path="/faq" element= {<FaqPage/>}/> x``
	</Routes>

	</>
  )
}

export default App