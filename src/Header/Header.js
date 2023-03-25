import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


function Header() {
  return (
    <div className="header">
        <div className="header__left">
           <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="" />

           <div className="header__search">
            <SearchIcon />
            <input type="text" />
           </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon ={SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon ={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon ={ChatIcon} title='Messaging' />
          <HeaderOption Icon ={NotificationsIcon} title='Notifications' />
          <HeaderOption avatar="https://steamuserimages-a.akamaihd.net/ugc/1734468995571234065/7C5B64643E16A9EC45A89F3956ADE1ABC874E0F7/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" title='me' />
        </div>
    </div>
  )
}

export default Header