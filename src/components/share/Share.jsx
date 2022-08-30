import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfilePic" src="../../resources/picture/raul.jpg" alt="Raul"/>
            <input 
            placeholder="What's in your mind?" 
            className="shareInput"
            />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
            <div className="shareOptionsContainer">
              <div className="shareOption">
                <PermMediaIcon htmlColor="green"className="shareIcon"/>
                <span className="shareOptionText">Photo/Video</span>
              </div>
              <div className="shareOption">
                <LabelIcon htmlColor="tomato"className="shareIcon"/>
                <span className="shareOptionText">Tags</span>
              </div>
              <div className="shareOption">
                <RoomIcon htmlColor="blue"className="shareIcon"/>
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotionsIcon htmlColor="gold"className="shareIcon"/>
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <button className="shareButton">Share</button>
          </div>
        </div>
    </div>
  )
}
