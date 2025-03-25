import Header from '../compnents/header';
export default function Dashboard() {
  return (
    <>
      <Header />
      <div className="dashboard">{localStorage.getItem('apikey-client')}</div>
    </>
  );
}
