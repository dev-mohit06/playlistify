import React, { useEffect } from 'react'
import { useAuth } from '../common/context'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/sign-in');
    }
  }, [token, navigate]);

  return (
    <>
      <h1>Hello</h1>
    </>
  )
}

export default Home