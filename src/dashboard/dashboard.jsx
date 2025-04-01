import { useState, useEffect } from 'react';
import Header from '../compnents/header';
import Loader from '../compnents/loader';
import ProfileLoader from '../compnents/profileloader';

export default function Dashboard() {
  var apiKey = 'q6SkRSe0P';
  const [metrics, setMetrics] = useState({
    totalUsers: 0,
    totalLogins: 0,
    peakTime: 'N/A',
  });
  const [userLogs, setUserLogs] = useState([]);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    apiKey: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        apiKey = localStorage.getItem('apiKey-client');
        if (!apiKey) throw new Error('No API key found');

        const response = await fetch(
          `https://keyperapi.vercel.app/getclient/${apiKey}`
        );
        if (!response.ok)
          throw new Error(`API request failed with status ${response.status}`);

        const result = await response.json();

        // Safely extract userLog with multiple fallbacks
        const userLog = Array.isArray(result?.data?.Userlog)
          ? result.data.Userlog
          : Array.isArray(result?.Userlog)
          ? result.Userlog
          : [];

        setUserLogs(userLog);
        if (result.data) {
          setClientInfo({
            name: result.data.name || 'N/A',
            email: result.data.email || 'N/A',
            phone: result.data.phone || 'N/A',
            apiKey: apiKey, // Using the key from localStorage
          });
        }

        // Calculate metrics with empty state defaults
        const defaultMetrics = {
          totalUsers: 0,
          totalLogins: 0,
          peakTime: 'No data',
        };

        if (userLog.length === 0) {
          setMetrics(defaultMetrics);
          return;
        }

        // 1. Total Unique Users (with null checks)
        const validEntries = userLog.filter(
          (entry) => entry && (entry.email || entry.phone)
        );

        const uniqueEmails = new Set(
          validEntries.map((entry) => entry.email).filter(Boolean)
        );
        const uniquePhones = new Set(
          validEntries.map((entry) => entry.phone).filter(Boolean)
        );

        // 2. Total Logins (all valid entries)
        const totalLogins = validEntries.length;

        // 3. Peak Time (with timestamp validation)
        const loginCountsByHour = {};

        validEntries.forEach((entry) => {
          try {
            if (entry.timestamp) {
              const hour = new Date(entry.timestamp).getHours();
              if (!isNaN(hour)) {
                loginCountsByHour[hour] = (loginCountsByHour[hour] || 0) + 1;
              }
            }
          } catch (e) {
            console.warn('Invalid timestamp:', entry.timestamp);
          }
        });

        const peakEntry = Object.entries(loginCountsByHour).sort(
          (a, b) => b[1] - a[1]
        )[0];
        const peakTime = peakEntry
          ? `${peakEntry[0]}:00 - ${peakEntry[0]}:59`
          : 'No peak data';

        setMetrics({
          totalUsers: Math.max(uniqueEmails.size, uniquePhones.size),
          totalLogins,
          peakTime,
        });
      } catch (err) {
        console.error('API Error:', err);
        setMetrics({
          totalUsers: 0,
          totalLogins: 0,
          peakTime: 'Error loading data',
        });
        setError('Failed to load analytics data');
      } finally {
        setLoading(false);
      }
    };

    fetchClientData();
  }, []);

  // Format timestamp for table display
  const formatDateTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = new Date(timestamp);
      return date.toLocaleString(); // Adjust format as needed
    } catch {
      return 'Invalid date';
    }
  };

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

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading-screen">
          <ProfileLoader />
        </div>
      </>
    );
  }

  if (error) {
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
  }

  return (
    <>
      <Header />
      <div className="dashboardpage">
        <div className="analyticssection">
          <div className="anal">
            <img src="/total.png" alt="" className="imgbg" />
            <div className="topcard">
              <div className="title">1. Total Users</div>
              <div className="timepicker">Select Date Range</div>
            </div>
            <div className="middlecard">{metrics.totalUsers}</div>
            <div className="bottomcard">Unique registered users</div>
          </div>

          <div className="anal">
            <img src="/logins.png" alt="" className="imgbg" />
            <div className="topcard">
              <div className="title">2. Total Logins</div>
              <div className="timepicker">Select Date Range</div>
            </div>
            <div className="middlecard">{metrics.totalLogins}</div>
            <div className="bottomcard">All authentication attempts</div>
          </div>

          <div className="anal">
            <img src="/peak.png" alt="" className="imgbg" />
            <div className="topcard">
              <div className="title">3. Peak Time</div>
              <div className="timepicker">Select Date Range</div>
            </div>
            <div className="middlecard" style={{ fontSize: '32px' }}>
              {metrics.peakTime}
            </div>
            <div className="bottomcard">Hour with most logins</div>
          </div>
        </div>
        <div className="info">
          <div className="one">Name - {clientInfo.name}</div>
          <div className="one">EMail - {clientInfo.email}</div>
          <div className="one">Phone - {clientInfo.phone}</div>
          <div className="one">APIKey - {clientInfo.apiKey}</div>
        </div>
        <div className="signin-table-container">
          <h2>Sign-in History</h2>
          <div className="signin-table-scroll">
            <table className="signin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {userLogs.length > 0 ? (
                  userLogs.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry?.name || 'N/A'}</td>
                      <td>{entry?.email || 'N/A'}</td>
                      <td>{entry?.phone || 'N/A'}</td>
                      <td>{formatDateTime(entry?.timestamp)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="no-data">
                      No sign-in data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
