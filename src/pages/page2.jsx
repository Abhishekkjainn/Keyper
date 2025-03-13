export default function Page2() {
  return (
    <div className="page2">
      <div className="toptagpage1">
        <div className="side"></div>We are Ready<div className="side2"></div>
      </div>
      <div className="page2header">
        Designed for Developers <br />
        Built for Enterprise
      </div>
      <div className="page2subheader">
        "Effortless authentication with a single API. Seamlessly integrate
        secure, scalable, and enterprise-ready auth solutions in just a few
        lines of code".
      </div>
      <div className="featurediv">
        <div className="feature">
          <img src="/singleauth.png" alt="" className="featureicon" />
          <div className="featuretag">Single API Authentication.</div>
        </div>
        <div className="feature">
          <img src="/phonelogin.png" alt="" className="featureicon" />
          <div className="featuretag">Phone and Email Login.</div>
        </div>
        <div className="feature">
          <img src="/password.png" alt="" className="featureicon" />
          <div className="featuretag">Password based Auth.</div>
        </div>
        <div className="feature">
          <img src="/otp.png" alt="" className="featureicon" />
          <div className="featuretag">OTP Based Auth.</div>
        </div>
        <div className="feature">
          <img src="/developer.png" alt="" className="featureicon" />
          <div className="featuretag">Seamless Developer Integration.</div>
        </div>
      </div>
    </div>
  );
}
