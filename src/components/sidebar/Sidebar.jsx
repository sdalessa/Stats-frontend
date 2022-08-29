import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import CampaignIcon from '@mui/icons-material/Campaign';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ForumIcon from '@mui/icons-material/Forum';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
              <RssFeedIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Feeds</span>
          </li>
          <li className="sidebarListItem">
              <BookmarksIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
              <GroupsIcon
               className="sidebarIcon"/>
              <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
              <CampaignIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Tournaments</span>
          </li>
          <li className="sidebarListItem">
              <SchoolIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Courses</span>
          </li>
          <li className="sidebarListItem">
              <OndemandVideoIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
              <ContactSupportIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
              <ForumIcon className="sidebarIcon"/>
              <span className="sidebarListItemText">Chats</span>
          </li>
        </ul>
        <button className="sidebarButton">Show more</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
        <ul className="sidebarFriendsList">
          <li className="sidebarFriend">
            <img className="sidebarProfilePic" src="../../resources/users/dima.jpg " alt=""/>
            <span className="sidebarFriendsName">Jane Doe </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
