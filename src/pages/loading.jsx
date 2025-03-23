import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Loading() {
  const { token, apikey } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userphone, setUserphone] = useState('');
  const [useremail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://keyperapi.vercel.app/checktoken/token=${token}/apikey=${apikey}`
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
        if (result.success) {
          setUserphone(result.data.phone);
          setUserEmail(result.data.email);

          // Save to local storage
          localStorage.setItem('userEmail', result.data.email);
          localStorage.setItem('userPhone', result.data.phone);
          localStorage.setItem('apiKey', apikey);
          localStorage.setItem('token', token);
        }
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.error('API fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token, apikey, navigate]);

  return (
    <div className="spinner">
      {loading ? (
        <>
          <h2>Loading...</h2>
          <p>Fetching authentication details...</p>
        </>
      ) : (
        <>
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
          <p>Redirecting to home in 10 seconds...</p>
        </>
      )}
    </div>
  );
}
