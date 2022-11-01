import "./App.css";
import Profile from "./components/profile/Profile";
import {Routes, Route} from 'react-router-dom';
import AddUser from "./components/profile/AddUser";

const App = () => {
  return (
	<Routes>
		<Route path="/profile" element= {<Profile />}/>
		<Route path="/add" element= {<AddUser />}/>
	</Routes>
  )
}

export default App