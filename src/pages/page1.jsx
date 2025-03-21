import { useEffect } from 'react';

export default function Page1() {
  const apikey = '5Iyx6x7vB';

  const handleRedirect = async () => {
    const currentUrl = encodeURIComponent(window.location.href);
    const apiUrl = `https://keyperapi.vercel.app/redirect/${currentUrl}/${apikey}`;

    try {
      const response = await fetch(apiUrl, { method: 'GET' });
      if (response.redirected) {
        window.location.href = response.url;
      } else {
        console.log('Redirect failed:', await response.text());
      }
    } catch (error) {
      console.error('Error fetching redirect:', error);
    }
  };

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
        <button onClick={handleRedirect} className="btn1">
          <img src="/user.png" alt="User button" className="btntag" />
          <div className="btntext">Sign In</div>
        </button>
        <button onClick={handleRedirect} className="btn1">
          <img src="/register.png" alt="User button" className="btntag" />
          <div className="btntext">Register</div>
        </button>
      </div>
    </div>
  );
}
