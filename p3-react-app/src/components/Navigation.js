import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
        <nav>
        <Link to='/'>Home</Link> 
        <Link to='/add'>Add New </Link> 
        <Link to='/profile'>Profile</Link>
        <Link to='/faq'>FAQ</Link>

        </nav>
    </div>
  )
}

export default Navigation;