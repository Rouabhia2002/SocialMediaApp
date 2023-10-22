import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
//import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom'; // Import the Link component


const navbar = () => {
  return (
    <div className="navbar">
    <div className="left">

    
    <Link to ="/" style={{TextDecoration: "none"}}>
    <span>ALGERIASOCIAL</span>
    </Link>

    <HomeOutlinedIcon/>
    <NightlightOutlinedIcon/>
    <GridViewOutlinedIcon/>

    <div className="search">
    <SearchOutlinedIcon/>
    <input type="text" placeholder="Search..." />
    </div>
     
    </div>
    <div className="right">
      <Person2OutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsNoneOutlinedIcon/>
      <div className="user">
        <img src="https://picsum.photos/200/200
" alt="" />
        <span>AMIRA</span>

      </div>



    </div>
    </div>
  )
}


export default navbar
