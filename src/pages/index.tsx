import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-500 h-screen flex-col flex justify-center">
      <div className="flex flex-row text-white text-2xl justify-center font-serif">
        Coming soon
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfF4a_afAFgjRpFXq4N8Z0UADMp-kt0lGw3OnuRNqGvlLewLQ/viewform" className="flex flex-row text-white text-2xl justify-center w-full text-xl mt-2 py-4 bg-gray-600">
        Join us!
      </a>
    </div>
  )
}

export default Home
