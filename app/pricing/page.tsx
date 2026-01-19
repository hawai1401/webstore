import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Pack Identité",
    price: "490€",
    description: "Parfait pour lancer votre image de marque.",
    features: [
      "Logo haute résolution",
      "Charte graphique",
      "Cartes de visite",
      "Support 7j/7",
    ],
    cta: "Commencer mon projet",
    mostPopular: false,
  },
  {
    name: "Site Vitrine",
    price: "1200€",
    description: "Un site web moderne et performant pour votre activité.",
    features: [
      "Design sur mesure",
      "Développement Next.js",
      "Optimisation SEO",
      "Hébergement & Domaine",
      "Animations 3D légères",
    ],
    cta: "Choisir le pack Pro",
    mostPopular: true,
  },
  {
    name: "E-commerce / Custom",
    price: "Sur devis",
    description: "Une solution complète pour vendre en ligne.",
    features: [
      "Boutique en ligne complète",
      "Gestion des stocks",
      "Paiements sécurisés",
      "Formation administration",
      "Maintenance annuelle",
    ],
    cta: "Nous contacter",
    mostPopular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="bg-base-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Tarifs
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-base-content sm:text-5xl">
            Des solutions adaptées à vos besoins numériques
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-base-content/70">
          Choisissez le pack qui correspond à votre étape de croissance. Pas de
          frais cachés, une transparence totale.
        </p>

        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 ring-1 ring-base-300 xl:p-10 ${
                tier.mostPopular
                  ? "bg-base-300 ring-2 ring-primary shadow-xl" // Utilisation de neutral pour trancher
                  : "bg-base-100 text-base-content"
              }`}
            >
              {tier.mostPopular && (
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 badge badge-primary font-bold px-4 py-3 border-none shadow-lg">
                  Le plus populaire
                </span>
              )}
              <div>
                {/* On s'assure que le texte hérite de la couleur de contenu du parent */}
                <h3 className="text-lg font-semibold leading-8">{tier.name}</h3>
                <p className="mt-4 text-sm leading-6 opacity-80">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {tier.price}
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 opacity-90"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      {/* L'icône change de couleur selon si c'est la carte populaire ou non */}
                      <Check
                        className={`h-6 w-5 flex-none ${tier.mostPopular ? "text-primary" : "text-primary"}`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/contact?pack=${encodeURIComponent(tier.name)}`}
                className={`mt-8 btn w-full border-none rounded-lg ${
                  tier.mostPopular
                    ? "btn-primary" // DaisyUI gère le contraste ici
                    : "btn-ghost bg-base-300 hover:bg-base-content/10"
                }`}
              >
                {tier.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
