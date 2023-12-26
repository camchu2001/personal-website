import { About, Navbar, Experience, Contact } from './components';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#2F4858]'>
      <Navbar />
      <div className="container mt-28 sm:mt-32 md:mt-22 mx-auto px-12 py-4">
        <About />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
