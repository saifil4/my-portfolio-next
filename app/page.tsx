import Image from 'next/image';
import Hero from './home/Hero';
import CardList from './home/CardList';

export default function Home() {
  return (
    <main>
      <Hero />
      <CardList />
    </main>
  )
}
