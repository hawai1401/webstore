"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Loader2, Send, User, Mail, MessageSquare } from "lucide-react";
// Importations de tes composants Shadcn...
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const searchParams = useSearchParams();
  const selectedPack = searchParams.get("pack") || "Général";
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    // Simulation d'un envoi API (ex: Resend ou Formspree)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Affichage du toast
    toast.success("Demande envoyée !", {
      description: `Nous avons bien reçu votre demande pour le ${selectedPack}.`,
    });

    setIsPending(false);
    (event.target as HTMLFormElement).reset(); // Réinitialise le formulaire
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-background/50">
      <Card className="w-full max-w-xl border-none shadow-2xl bg-card/60 backdrop-blur-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-foreground">
            Parlons de votre projet
          </CardTitle>
          <CardDescription className="text-base">
            Pack sélectionné :{" "}
            <span className="text-primary font-bold">{selectedPack}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="w-4 h-4 opacity-70" /> Nom complet
              </Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="bg-background/50"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-70" /> Email professionnel
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="bg-background/50"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 opacity-70" /> Votre besoin
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder={`Expliquez-moi votre projet...`}
                className="min-h-30 bg-background/50 resize-none"
              />
            </div>

            <Button
              disabled={isPending}
              className="w-full text-base font-semibold"
              size="lg"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer ma demande
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Page() {
  <Suspense fallback={"Chargement"}>
    <ContactForm />;
  </Suspense>;
}
