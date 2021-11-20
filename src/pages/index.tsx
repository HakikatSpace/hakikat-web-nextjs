import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-yellow-50 h-screen flex-col flex justify-center">
      <span className="flex flex-row justify-center w-full text-xl py-2">
        Coming soon!
      </span>
      <div className="text-white text-2xl font-sans bg-gray-700 p-4">
          <h1 className="font-bold my-2">Tentang Komunitas Hakikat</h1>

          <p className="my-4">Hakikat adalah komunitas para penggagas untuk bertemu, belajar, dan terhubung. Menggiatkan individu untuk perubahan diri dan dunia sekitar.</p>
          <p className="my-4">Hakikat bertujuan membantu individu menyadari potensi sejati diri, berpartisipasi aktif, dan membuat perubahan positif bagi masyarakat dengan berbagi, belajar, dan berkolaborasi. Sebagai meta-ruang dalam mengeksplorasi ide-ide baru, berbagi pendapat, serta memulai inisiatif dengan lingkungan yang mendukung untuk berkembang.</p>
      </div>

      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfF4a_afAFgjRpFXq4N8Z0UADMp-kt0lGw3OnuRNqGvlLewLQ/viewform" className="flex flex-row text-white text-2xl justify-center w-full text-xl mt-2 py-4 bg-gray-600">
        Join us!
      </a>
    </div>
  )
}

export default Home
