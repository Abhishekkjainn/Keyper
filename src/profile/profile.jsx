import { useState, useEffect } from 'react';
// import Header from '../components/header';
import Header from '../compnents/header';
import axios from 'axios';
import ProfileLoader from '../compnents/profileloader';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [userLogs, setUserLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apikey = 'q6SkRSe0P';

  useEffect(() => {
    const userPhone = localStorage.getItem('userPhone');
    if (!userPhone) {
      setError('User phone number not found. Please log in again.');
      setLoading(false);
      return;
    }

    async function fetchUserData() {
      try {
        const response = await axios.get(
          `https://keyperapi.vercel.app/getuser/${userPhone}`
        );
        if (response.data.success) {
          setUserData(response.data.data);
          setUserLogs(response.data.data.userLog || []);
        } else {
          setError('Failed to fetch user data.');
        }
      } catch (err) {
        setError('Failed to load data.');
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

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

  if (loading)
    return (
      <div className="loaderpage">
        {' '}
        <ProfileLoader />
      </div>
    );
  if (error)
    return (
      <>
        <Header />
        <div className="errorpage">
          <div className="errortext">{error}</div>
          <button onClick={handleRedirect} className="btn1">
            <img src="/user.png" alt="User button" className="btntag" />
            <div className="btntext">Sign In</div>
          </button>
        </div>
      </>
    );

  return (
    <>
      <Header />
      <div className="profilepage">
        <div className="profilesection">
          <div className="profilelogs">
            <div className="loghead">User Logs</div>
            <div className="logdiv">
              {userLogs.length > 0 ? (
                <table className="user-log-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Platform Name</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userLogs.map((log, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{log.platformname || 'N/A'}</td>
                        <td>{new Date(log.timestamp).toLocaleString()}</td>
                        <td>{log.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No logs available.</div>
              )}
            </div>
          </div>
          <div className="profilediv">
            <div className="loghead">User Profile</div>
            <div className="profiledetails">
              {/* <div className="det">
                <strong>Name:</strong> {userData?.name || 'N/A'}
              </div> */}
              <div className="det">
                <div className="dethead">Name</div> :{' '}
                <div className="detval">{userData?.name}</div>
              </div>
              <div className="det">
                <div className="dethead">Email</div> :{' '}
                <div className="detval"> {userData?.email}</div>
              </div>
              <div className="det">
                <div className="dethead">Phone</div> :{' '}
                <div className="detval">+91 {userData?.phone}</div>
              </div>
              <div className="det">
                <div className="dethead">Logs</div> :{' '}
                <div className="detval">{userLogs.length}</div>{' '}
              </div>
              <div className="det">
                <div className="dethead">Registered On</div> :{' '}
                <div className="detval">
                  {userData?.createdAt
                    ? new Date(userData.createdAt).toLocaleDateString()
                    : 'N/A'}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="powered">Powered by Keyper Auth.</div>
      </div>
    </>
  );
}
