import "./rightbar.css"
import ScoreboardIcon from '@mui/icons-material/Scoreboard';
import {Users} from "../../dummyData"
import Online from "../online/Online"

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
                {Users.map((u)=>(
                  <Online key={u.id} user={u}/>
                ))}
            </ul> 
        </div>
    </div>
  )
}
