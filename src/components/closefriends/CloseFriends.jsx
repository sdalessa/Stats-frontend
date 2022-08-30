import "./closefriends.css";

export default function CloseFriends({user}) {
  return (

    <li className="sidebarFriend">
      <img
        className="sidebarProfilePic"
        src={user.profilePicture}
        alt=""
      />
      <span className="sidebarFriendsName">{user.username} </span>
    </li>

  );
}
