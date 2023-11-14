import { HeroSection } from './components';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-black container mx-auto px-12 py-4'>
      <HeroSection/>
    </main>
  );
}
