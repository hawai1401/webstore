import {
  ClipboardList,
  Palette,
  Code,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const steps = [
  {
    title: "1. Analyse & Stratégie",
    description:
      "On commence par un appel pour comprendre vos objectifs, votre cible et vos goûts esthétiques. Le but : définir une direction claire.",
    icon: <ClipboardList className="w-8 h-8 text-primary" />,
    details: [
      "Audit de marque",
      "Benchmark concurrentiel",
      "Cahier des charges",
    ],
  },
  {
    title: "2. Design & Identité",
    description:
      "C'est l'étape créative. Je conçois des maquettes haute fidélité et l'univers graphique qui fera vibrer votre projet.",
    icon: <Palette className="w-8 h-8 text-primary" />,
    details: ["Moodboard", "UI/UX Design", "Prototypes interactifs"],
  },
  {
    title: "3. Développement Expert",
    description:
      "Je transforme le design en code propre et performant avec Next.js. Votre site sera rapide, sécurisé et optimisé pour le SEO.",
    icon: <Code className="w-8 h-8 text-primary" />,
    details: [
      "Next.js 16 / React 19",
      "Animations 3D (Three.js)",
      "Mobile First",
    ],
  },
  {
    title: "4. Lancement & Suivi",
    description:
      "Mise en ligne, tests finaux et formation pour que vous soyez autonome sur votre nouvel outil.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
    details: [
      "Hébergement Vercel",
      "Optimisation SEO",
      "Support post-lancement",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Ma Méthode de Travail
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Un processus structuré en 4 étapes pour passer de l&apos;idée à une
          réalité numérique d&apos;exception.
        </p>
      </div>

      <div className="relative space-y-12">
        {/* Ligne verticale de la timeline (visible sur desktop) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Contenu de la carte */}
            <div className="flex-1 w-full">
              <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm hover:ring-1 ring-primary/50 transition-all">
                <CardHeader>
                  <div className="mb-2 md:hidden">{step.icon}</div>
                  <CardTitle className="text-2xl font-bold">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <ul className="grid grid-cols-1 gap-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Point central (Timeline) */}
            <div className="relative z-10 items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--p),0.2)] hidden md:flex">
              {step.icon}
            </div>

            {/* Espaceur pour l'équilibre */}
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>

      {/* CTA Final */}
      <div className="mt-20 text-center bg-primary/5 p-10 rounded-3xl border border-primary/10">
        <h3 className="text-2xl font-bold mb-4">Prêt à démarrer ?</h3>
        <p className="mb-6 opacity-80">
          Chaque grand projet commence par une simple discussion.
        </p>
        <Link href="/contact" className="btn btn-primary px-8 rounded-lg">
          Réserver mon appel découverte
        </Link>
      </div>
    </div>
  );
}
