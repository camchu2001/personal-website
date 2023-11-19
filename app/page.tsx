import { HeroSection, Navbar, Experience } from './components';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#2F4858]'>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <Experience />
      </div>
    </main>
  );
}
