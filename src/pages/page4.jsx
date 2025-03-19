// import PasswordScrambleAnimation from '../components/animation';

import PasswordScrambleAnimation from '../compnents/animation';

export default function Page4() {
  return (
    <div className="page4">
      {/* Top Tag */}
      <div className="toptagpage1">
        <div className="side"></div>Uncompromising Security.
        <div className="side2"></div>
      </div>

      {/* Headings */}
      <div className="page2header">
        Authentication, Engineered for the Future.
        <br />
        <span className="highlight">
          One API. Zero Vulnerabilities. Ultimate Protection.
        </span>
      </div>

      <div className="page2subheader">
        Say goodbye to weak passwords, security breaches, and outdated
        authentication methods.
        <strong> Keyper </strong> delivers enterprise-grade security with the
        simplicity developers love. Experience frictionless
        authentication—passwordless logins, seamless OTPs, and bank-level
        encryption, all packed into a developer-first API.
      </div>

      {/* Code Block */}
      <div className="code-container2">
        <PasswordScrambleAnimation />
      </div>
    </div>
  );
}
