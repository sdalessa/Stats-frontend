import "./rightbar.css"
import ScoreboardIcon from '@mui/icons-material/Scoreboard';

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
            <ul className="statsList">
            <li className="rightbarListItem">
              <ScoreboardIcon className="rightbarIcon"/>
              <span className="rightbarListItemText">Points: 4.4</span>
          </li>
          <li className="rightbarListItem">
              <ScoreboardIcon className="rightbarIcon"/>
              <span className="rightbarListItemText">Rebounds: 3.2</span>
          </li>
          <li className="rightbarListItem">
              <ScoreboardIcon className="rightbarIcon"/>
              <span className="rightbarListItemText">Assists: 1.9</span>
          </li>
          <li className="rightbarListItem">
              <ScoreboardIcon className="rightbarIcon"/>
              <span className="rightbarListItemText">Steals: 1.3</span>
          </li>
          <li className="rightbarListItem">
              <ScoreboardIcon className="rightbarIcon"/>
              <span className="rightbarListItemText">Turnovers: 0.9</span>
          </li>
            </ul>
            <h4 className="rightbarTitle">Friends Online</h4>
            <ul className="rightbarFriendsList">
            <li className="rightbarFriend">
              <div className="rightbarPicContainer">
                <img src="../../resources/users/Hsu.jpg" alt="Hsu" className="rightbarProfilePic" />
                <span className="righbarOnlineStatus"></span>
              </div>
              <span className="rightbarUsername">Hsu Xing</span>
            </li>  
            </ul> 
            <ul className="rightbarFriendsList">
            <li className="rightbarFriend">
              <div className="rightbarPicContainer">
                <img src="../../resources/users/Hsu.jpg" alt="Hsu" className="rightbarProfilePic" />
                <span className="righbarOnlineStatus"></span>
              </div>
              <span className="rightbarUsername">Hsu Xing</span>
            </li>  
            </ul> 
            <ul className="rightbarFriendsList">
            <li className="rightbarFriend">
              <div className="rightbarPicContainer">
                <img src="../../resources/users/Hsu.jpg" alt="Hsu" className="rightbarProfilePic" />
                <span className="righbarOnlineStatus"></span>
              </div>
              <span className="rightbarUsername">Hsu Xing</span>
            </li>  
            </ul> 
            <ul className="rightbarFriendsList">
            <li className="rightbarFriend">
              <div className="rightbarPicContainer">
                <img src="../../resources/users/Hsu.jpg" alt="Hsu" className="rightbarProfilePic" />
                <span className="righbarOnlineStatus"></span>
              </div>
              <span className="rightbarUsername">Hsu Xing</span>
            </li>  
            </ul> 
        </div>
    </div>
  )
}
