import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Bienvenue sur Locagest</h1>
      <p className="mt-4">Commencez à ajouter vos biens en cliquant ci-dessous.</p>
      <Link href="/biens" className="text-blue-600 underline mt-4 block">Voir les biens</Link>
    </main>
  );
}