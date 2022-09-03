import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightside/Rightbar"
import Feeds from "../../components/feeds/Feeds"
import "./home.css"
import {useState, useEffect} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"

export default function Home() {

  ////////This is the component that should be in profile, but the props passing was not working
  const [user, setUser] = useState({});
  const username = useParams().username

  useEffect(() => {
    const fetchUsers = async () => {
      console.log(username)
      const res = await axios.get(
        `http://localhost:8800/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUsers();
  }, [username]);

  return (
      <>

        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feeds username={username} />
        <Rightbar user={user}/>
        </div>

    </>
  )
}
