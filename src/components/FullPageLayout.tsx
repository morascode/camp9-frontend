import { useEffect } from 'react';
import { useCheckAuthQuery } from '../hooks/useUser';
import { Outlet, useNavigate } from 'react-router-dom';

export default function FullPageLayout() {
  // is user loggedIn ?
  // redirect to /login
  const navigate = useNavigate();
  const { data, isLoading } = useCheckAuthQuery();

  useEffect(() => {
    if (!data?.auth) {
      navigate('/login');
    }
  }, [data?.auth, navigate]);

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
