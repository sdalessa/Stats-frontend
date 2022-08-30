
import "./online.css"

export default function ({user}) {
  return (
    <li className="rightbarFriend">
    <div className="rightbarPicContainer">
      <img
        src={user.profilePicture}
        alt="Hsu"
        className="rightbarProfilePic"
      />
      <span className="righbarOnlineStatus"></span>
    </div>
    <span className="rightbarUsername">{user.username}</span>
  </li>
  );
}
