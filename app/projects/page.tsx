import { ExternalLink, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Luxe",
    description:
      "Une boutique en ligne avec des transitions fluides et un rendu 3D des produits.",
    image: "/projects/e-commerce.avif",
    tags: ["Next.js", "Three.js", "Stripe"],
    link: "#",
  },
  {
    title: "Application SaaS",
    description:
      "Dashboard complexe avec gestion de données en temps réel et mode sombre natif.",
    image: "/projects/saas.jfif",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    title: "Studio Graphique",
    description:
      "Site vitrine pour un studio créatif mettant l'accent sur la typographie et le mouvement.",
    image: "/projects/graphique.jfif",
    tags: ["UI/UX", "Framer Motion"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tighter">
            Mes <span className="text-primary italic">Réalisations</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Un aperçu de mes derniers projets alliant performance technique et
            esthétique moderne.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-primary hover:text-primary-content"
          >
            Tous
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Web
          </Badge>
          <Badge variant="outline" className="cursor-pointer">
            Design
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-none bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                height={80}
                width={800}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <Link href={project.link} className="btn btn-primary btn-sm">
                  Voir le projet <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold">
                  {project.title}
                </CardTitle>
                <Layers className="w-5 h-5 opacity-30" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 bg-base-300 rounded"
                >
                  {tag}
                </span>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
