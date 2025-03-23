import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="headermain">
      <div className="topheader">
        <img src="titlelog.png" alt="mainlogo" className="toplogo" />
        <div className="toptag">Keyper</div>
      </div>
      <div className="header">
        <div className="home">
          <img src="titlelog.png" alt="mainlogo" className="toplogoheader" />
          <div className="toptagheader">Keyper</div>
        </div>
        <div className="links">
          <div className="link">
            {' '}
            <img src="/docs.png" alt="docs" className="linktag" /> Docs
          </div>
          <div className="link">
            {' '}
            <img src="/dashboard.png" alt="docs" className="linktag" />{' '}
            Dashboard
          </div>
          <div className="link">
            {' '}
            <img src="/contact.png" alt="docs" className="linktag" /> Contact
          </div>
          <div className="link">
            {' '}
            <img src="/features.png" alt="docs" className="linktag" /> Features
          </div>
        </div>
      </div>
      <Link to={'/profile'} className="profile">
        <img src="/profile2.png" alt="Profile Icon" className="profileimg" />
      </Link>
    </div>
  );
}
