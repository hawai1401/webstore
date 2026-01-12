import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default async function Devis({
  searchParams,
}: {
  searchParams: Promise<{ service: string | undefined }>;
}) {
  const queries = await searchParams;
  return (
    <main className="p-8 min-h-[calc(100vh-65px)] flex items-center justify-center">
      <Card className="w-full max-w-1/2">
        <CardHeader>
          <CardTitle>Devis</CardTitle>
          <CardDescription>Demander un devis</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Addresse mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Type de service</Label>
                <Select defaultValue={queries.service}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choisissez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Graphisme</SelectLabel>
                      <SelectItem value="logo">
                        Logo d&apos;entreprise
                      </SelectItem>
                      <SelectItem value="charte">
                        Charte graphique complète
                      </SelectItem>
                      <SelectItem value="affiche">
                        Affiche publicitaire
                      </SelectItem>
                      <SelectLabel>Web</SelectLabel>
                      <SelectItem value="siteCommerce">
                        Site e-commerce
                      </SelectItem>
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
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Envoyer
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
