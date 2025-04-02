import Header from './compnents/header';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Preview from './pages/preview';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function Homepage() {
  return (
    <>
      <Header />
      <Page1 />
      <Preview />
      <Page2 />
      <Page3 />
      <Page4 />
      <div className="docsbuttondiv">
        <div className="docsbutton">
          <img src="/docs.png" alt="Docs" className="docimg" />
          <Link to={'/documentation'} className="docstag">
            View Keyper Docs
          </Link>
        </div>
      </div>
    </>
  );
}
