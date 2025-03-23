// import { useState, useEffect } from 'react';
// import Header from '../compnents/header';
// import axios from 'axios';

// export default function Profile() {
//   const [nodata, setNoData] = useState(false);
//   const [userData, setUserData] = useState(null);
//   const [userLogs, setUserLogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchUserData() {
//       try {
//         const response = await axios.get(
//           `http://localhost:6969/getuser/${localStorage.getItem('phone')}`
//         );
//         setUserData(response.data);
//         setUserLogs(response.data.userLog || []);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to load data');
//         setLoading(false);
//       }
//     }
//     fetchUserData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <>
//       <Header />
//       <div className="profilepage">
//         <div className="profilesection">
//           <div className="profilelogs">
//             <div className="loghead">User Logs</div>
//             <div className="logdiv">
//               <table className="user-log-table">
//                 <thead className="thead">
//                   <tr>
//                     <th>S.No</th>
//                     <th>Platform Name</th>
//                     <th>Time</th>
//                     <th>Action</th>
//                   </tr>
//                 </thead>
//                 <tbody className="tbody">
//                   {userLogs.map((log, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{log.platformname}</td>
//                       <td>{new Date(log.timestamp).toLocaleString()}</td>
//                       <td>{log.action}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//           <div className="profilediv">
//             <div className="loghead">User Profile</div>
//             <div className="profiledetails">
//               <div className="det">
//                 <div className="dethead">Name</div> :{' '}
//                 <div className="detval">{userData?.name}</div>
//               </div>
//               <div className="det">
//                 <div className="dethead">Email</div> :{' '}
//                 <div className="detval">{userData?.email}</div>
//               </div>
//               <div className="det">
//                 <div className="dethead">Phone</div> :{' '}
//                 <div className="detval">+91 {userData?.phone}</div>
//               </div>
//               <div className="det">
//                 <div className="dethead">Logs</div> :{' '}
//                 <div className="detval">{userLogs.length}</div>
//               </div>
//               <div className="det">
//                 <div className="dethead">Password</div> :{' '}
//                 <div className="detval">{userData?.hashedpassword}</div>
//               </div>
//               <div className="det">
//                 <div className="dethead">Registered on</div> :{' '}
//                 <div className="detval">
//                   {new Date(userData?.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="powered">Powered by Keyper Auth.</div>
//       </div>
//     </>
//   );
// }

import { useState, useEffect } from 'react';
// import Header from '../components/header';
import Header from '../compnents/header';
import axios from 'axios';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const [userLogs, setUserLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
