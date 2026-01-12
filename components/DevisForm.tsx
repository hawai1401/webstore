"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function DevisForm({
  service,
}: {
  service?: undefined | string;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        toast.success("Demande envoyé avec succès !");
      }}
    >
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Addresse mail</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Type de service</Label>
          <Select defaultValue={service} required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choisissez un service" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Graphisme</SelectLabel>
                <SelectItem value="logo">Logo d&apos;entreprise</SelectItem>
                <SelectItem value="charte">
                  Charte graphique complète
                </SelectItem>
                <SelectItem value="affiche">Affiche publicitaire</SelectItem>
                <SelectLabel>Web</SelectLabel>
                <SelectItem value="siteCommerce">Site e-commerce</SelectItem>
                <SelectItem value="siteVitrine">Site vitrine</SelectItem>
                <SelectItem value="blog">Blog</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Demande</Label>
          <Textarea
            id="text"
            placeholder="Décrivez votre demande..."
            className="min-h-50"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Envoyer
        </Button>
      </div>
    </form>
  );
}
