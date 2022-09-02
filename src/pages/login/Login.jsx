import "./login.css";

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="forgotPassword">Forgot Password?</span>
            <button className="registerButton" id="">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
