import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">Topbar
        <div className="topbarLeft">Search
        <br></br>
        <span className="logo">SocialMedia</span>
      </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <SearchIcon/>
          <input 
          placeholder="Search for friends or posts" 
          className="searchinput" 
           />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
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
          <img src="../../resources/users/ami.jpg" alt="Ami" className="topbarPic" />
        </div>
    </div>
  )
}
