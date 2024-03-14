import { About, Navbar, Footer } from './components';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#253946]'>
      <Navbar />
      <div className="container mt-28 sm:mt-32 md:mt-22 mx-auto px-12 py-4 flex-1">
        <About />
      </div>
      <Footer/>
    </main>
  );
}
