import "./rightbar.css";
// import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        {/* <ul className="statsList">
          <li className="rightbarListItem">
            <ScoreboardIcon className="rightbarIcon" />
            <span className="rightbarListItemText">Points: 4.4</span>
          </li>
          <li className="rightbarListItem">
            <ScoreboardIcon className="rightbarIcon" />
            <span className="rightbarListItemText">Rebounds: 3.2</span>
          </li>
          <li className="rightbarListItem">
            <ScoreboardIcon className="rightbarIcon" />
            <span className="rightbarListItemText">Assists: 1.9</span>
          </li>
          <li className="rightbarListItem">
            <ScoreboardIcon className="rightbarIcon" />
            <span className="rightbarListItemText">Steals: 1.3</span>
          </li>
          <li className="rightbarListItem">
            <ScoreboardIcon className="rightbarIcon" />
            <span className="rightbarListItemText">Turnovers: 0.9</span>
          </li>
        </ul> */}
        <h4 className="rightbarTitle">Friends Online</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () =>{
    return(
    <>
    <h4 className="rightbarTitle">USER INFO TITLE</h4>
    <div className="rightbarInfo">
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">City: </span>
        <span className="rightbarInfoKey">Cape Town</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">School: </span>
        <span className="rightbarInfoKey">Cape Town University</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship: </span>
        <span className="rightbarInfoKey">Single</span>
      </div>
    </div>
    <h4 className="rightbarTitle">USERS YOU FOLLOW</h4>
    <div className="rightbarFollows">
      <div className="rightbarFollowing">
        <img src="../../resources/picture/bailey.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Nikola</span>
    </div>
    <div className="rightbarFollowing">
        <img src="../../resources/picture/bailey.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Nikola</span>
    </div>
    <div className="rightbarFollowing">
        <img src="../../resources/picture/bailey.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Nikola</span>
    </div>
    <div className="rightbarFollowing">
        <img src="../../resources/picture/bailey.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Nikola</span>
    </div>
    <div className="rightbarFollowing">
        <img src="../../resources/picture/bailey.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Nikola</span>
    </div>
    <div className="rightbarFollowing">
        <img src="../../resources/picture/bailey.jpg" alt="" className="rightbarFollowingImg" />
        <span className="rightbarFollowingName">Nikola</span>
    </div>
    </div>
    </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  );
}
