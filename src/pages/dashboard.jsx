import { useParams, useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const user = useParams().user;
  return <div className="dashboard">Dashboard - {user}</div>;
}
