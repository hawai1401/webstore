"use client";

import { Beaker, Sparkles, Cpu, Eye } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const experiments = [
  {
    title: "Interactive Shaders",
    category: "WebGL / GLSL",
    description:
      "Exploration des distorsions organiques et des effets de lumière dynamiques au mouvement de la souris.",
    icon: <Sparkles className="w-6 h-6 text-purple-500" />,
    difficulty: "Expert",
  },
  {
    title: "Particules 3D",
    category: "Three.js",
    description:
      "Système de particules réagissant à la musique ou aux fréquences audio pour des fonds immersifs.",
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    difficulty: "Avancé",
  },
  {
    title: "Morphing de Géométries",
    category: "R3F",
    description:
      "Transitions fluides entre différentes formes géométriques complexes via React Three Fiber.",
    icon: <Beaker className="w-6 h-6 text-green-500" />,
    difficulty: "Intermédiaire",
  },
];

export default function LabPage() {
  return (
    <div className="relative">
      <div className="py-24 px-6 max-w-6xl mx-auto min-h-screen">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-widest">
            <Beaker className="w-3 h-3" /> Zone d&apos;expérimentation
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight italic">
            THE <span className="text-primary">LAB</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Un espace dédié à la recherche visuelle et aux technologies
            émergentes. Ici, on teste les limites du navigateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <Card
              key={i}
              className="relative group border-none bg-zinc-900/50 backdrop-blur-xl overflow-hidden hover:scale-[1.02] transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                {exp.icon}
              </div>
              <CardHeader className="pt-10">
                <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-2 block">
                  {exp.category}
                </span>
                <CardTitle className="text-2xl font-bold text-white mb-2">
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-zinc-400 leading-relaxed">
                  {exp.description}
                </CardDescription>
              </CardHeader>
              <div className="p-6 pt-0 flex justify-between items-center">
                <span className="text-xs text-zinc-500 font-mono">
                  Niveau: {exp.difficulty}
                </span>
                <button className="flex items-center gap-2 text-xs font-bold text-white hover:text-primary transition-colors uppercase">
                  Lancer le test <Eye className="w-3 h-3" />
                </button>
              </div>
              {/* Décoration subtile en fond */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            </Card>
          ))}
        </div>

        <div className="mt-24 border-t border-white/5 pt-10 text-center">
          <p className="text-zinc-500 text-sm italic">
            &quot;L&apos;innovation, c&apos;est ce qui distingue un leader
            d&apos;un suiveur.&quot; — Steve Jobs
          </p>
        </div>
      </div>
    </div>
  );
}
