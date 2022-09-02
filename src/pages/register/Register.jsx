import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CRUDbook</h3>
          <span className="loginDesc">
            Here you can share and connect with your friends!
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Repeat Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="registerButton" id="">
              Log into your Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
