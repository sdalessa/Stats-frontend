import "./rightbar.css";
// import ScoreboardIcon from "@mui/icons-material/Scoreboard";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ user }) {
  const HomeRightbar = () => {
    return (
      <>
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
        <span className="rightbarInfoValue">{user.city}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">School: </span>
        <span className="rightbarInfoValue">{user.from}</span>
      </div>
      <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Relationship: </span>
        <span className="rightbarInfoValue">
          {user.relationship ===1 ? "Single" 
          : user.relationship ===2 ? "Married" 
          : "-"}
          </span>
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
        {{user} ? <ProfileRightbar/> : <HomeRightbar/> }
      </div>
    </div>
  );
}
