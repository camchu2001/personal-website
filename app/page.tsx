import { HeroSection } from './components';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#2F4858]'>
      <div className="container mx-auto px-12 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
