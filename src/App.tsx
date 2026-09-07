import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* Componente Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <main>
        <Hero />
        <Services />
      </main>
    </div>
  );
}
