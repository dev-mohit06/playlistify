import Spotify from '../assets/spotify.svg'
import { useAuth } from '../common/context.jsx';
import { useNavigate } from 'react-router-dom';
import {getSpotifyAuthUrl} from '../common/auth.js';
import { useEffect } from 'react';

const SignIn = () => {

  const navigate = useNavigate();
  const { token } = useAuth();
  
  useEffect(() => {
    if(token){
      navigate('/');
    }
  },[token,navigate])

  const handleSingIn = (e) => {
    window.location.href = getSpotifyAuthUrl();
  }

  return (
    <>
      {
        !token ? (
          <div className='container flex justify-center items-center mx-auto h-screen'>
            <div className='flex flex-col justify-center items-center'>
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Welcome to Playlistify</h1>
              <p className="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Create automatic playlists effortlessly! Log in with your Spotify account, enter your favorite songs, and let Playlistify do the rest.</p>
              <a onClick={handleSingIn} href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-gray-600">
                Sign in with Spotify
                <img src={Spotify} className="w-6 h-6 ms-2 rtl:rotate-180" />
              </a>
            </div>
          </div>
        ) : navigate('/')
      }
    </>
  )
}

export default SignIn