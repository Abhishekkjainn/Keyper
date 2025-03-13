export default function Page1() {
  return (
    <div className="page1">
      <div className="toptagpage1">
        <div className="side"></div>Introducing<div className="side2"></div>
      </div>
      <div className="headpage1">Keyper</div>
      <div className="subhead">
        Built for developers, loved by users. Keyper combines security,
        simplicity, and stunning design for effortless authentication. Powered
        by Node.js, Express.js, React, and Firebase.
      </div>
      <div className="buttonspage1">
        <div className="btn1">
          <img src="/user.png" alt="User button" className="btntag" />
          <div className="btntext">Sign In</div>
        </div>
        <div className="btn1">
          <img src="/register.png" alt="User button" className="btntag" />
          <div className="btntext">Register</div>
        </div>
      </div>
    </div>
  );
}
