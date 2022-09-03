import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightside/Rightbar";
import Feeds from "../../components/feeds/Feeds";
import "./profile.css";
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams} from "react-router"

export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUsers();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture || "../../resources/images/IMG_9.jpg"}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture || "../../resources/picture/raul.jpg"}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feeds username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
