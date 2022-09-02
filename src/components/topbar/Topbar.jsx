import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {Link} from "react-router-dom"

export default function Topbar() {
  return (
    <div className="topbarContainer">.
        <div className="topbarLeft">.
        <br></br>
        <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">CRUDbook</span>
        </Link>
      </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input 
          placeholder="Search for friends or posts" 
          className="searchinput" 
           />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ChatIcon/>
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <CircleNotificationsIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="../../resources/picture/raul.jpg" alt="Raul" className="topbarPic" />
        </div>
    </div>
  )
}
