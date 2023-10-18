import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hello I&apos;m
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent"> Cam!</span>
      </h1>
      <p className="mt-3 text-xl text-gray-600">Welcome to my site! Check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>
    </div>
  )

}
