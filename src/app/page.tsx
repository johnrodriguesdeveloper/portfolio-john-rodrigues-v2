import { Header } from "@/components/Header";
import ParticlesContainer from "@/components/ParticlesContainer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ParticlesContainer />
      </main>
    </div>
  );
}
