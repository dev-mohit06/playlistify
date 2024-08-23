import React from 'react'
import Spotify from './assets/spotify.svg'

const App = () => {
  return (
    <div className='container flex justify-center items-center mx-auto h-screen'>
      <div className='flex flex-col justify-center items-center'>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Welcome to Playlistify</h1>
        <p class="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Create automatic playlists effortlessly! Log in with your Spotify account, enter your favorite songs, and let Playlistify do the rest.</p>
        <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-black rounded-lg hover:bg-gray-600 focus:ring-4 focus:ring-blue-300">
          Sign in with Spotify
          <img src={Spotify} class="w-6 h-6 ms-2 rtl:rotate-180" />
        </a>
      </div>
    </div>
  )
}

export default App