import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Loading() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apikey = '132456780'; // API Key

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://keyperapi.vercel.app/checktoken/token=${token}/apikey=${apikey}`
        );
        const result = await response.json();
        setData(result);
        setLoading(false);

        // Redirect to '/' after 10 seconds
        setTimeout(() => {
          navigate('/');
        }, 10000);
      } catch (error) {
        console.error('API fetch error:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token, navigate]);

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
