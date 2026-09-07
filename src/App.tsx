import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      {/* Componente Navbar */}
      <Navbar />

      {/* Contenido Principal */}
      <main>
        <Hero />
      </main>
    </div>
  );
}
