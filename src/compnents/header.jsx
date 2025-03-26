import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="headermain">
      <Link to={'/'} className="topheader">
        <img src="titlelog.png" alt="mainlogo" className="toplogo" />
        <div className="toptag">Keyper</div>
      </Link>
      <div className="header">
        <Link to={'/'} className="home">
          <img src="titlelog.png" alt="mainlogo" className="toplogoheader" />
          <div className="toptagheader">Keyper</div>
        </Link>
        <div className="links">
          <Link to={'/documentation'} className="link">
            <img src="/docs.png" alt="docs" className="linktag" /> Docs
          </Link>
          <Link to={'/dashboard'} className="link">
            <img src="/dashboard.png" alt="docs" className="linktag" />{' '}
            Dashboard
          </Link>
          <div className="link">
            <img src="/contact.png" alt="docs" className="linktag" /> Contact
          </div>
          <div className="link">
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
