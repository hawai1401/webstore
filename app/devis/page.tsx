"use client";

import DevisForm from "@/components/DevisForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Devis() {
  return (
    <main className="p-8 min-h-[calc(100vh-65px)] flex items-center justify-center">
      <Card className="w-full max-w-1/2">
        <CardHeader>
          <CardTitle>Devis</CardTitle>
          <CardDescription>Demander un devis</CardDescription>
        </CardHeader>
        <CardContent>
          <DevisForm />
        </CardContent>
      </Card>
    </main>
  );
}
