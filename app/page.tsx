import { About, Navbar, Footer } from './components';

export default async function Home() {
  return (
    <main className='flex flex-wrap min-h-screen flex-col bg-[#253946]'>
      <Navbar />
      <div className="container mt-20 sm:mt-32 md:mt-22 mx-auto px-12 py-4 flex-grow">
        <About />
      </div>
      <Footer/>
    </main>
  );
}
