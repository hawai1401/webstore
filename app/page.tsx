import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="bg-zinc-500">
        <section
          id="hero"
          className="flex flex-col justify-center items-center gap-10 bg-radial-[at_50%_30%] from-slate-200 to-slate-400 p-5 pt-10"
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <Image src="/logo.png" alt="logo" width={80} height={80} />
            <h1 className="text-5xl">
              Web<span className="text-blue-500">Store</span>
            </h1>
          </div>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            corporis iusto dolor est quasi eveniet obcaecati itaque aut magnam
            dolore nesciunt possimus quos consectetur magni, facilis
            dignissimos. Ad debitis, mollitia porro laboriosam veritatis, error
            perspiciatis necessitatibus animi dolorem, eum dignissimos nihil
            maiores voluptatibus pariatur dicta omnis. Vel iusto ea animi!
          </p>
        </section>
        <section
          id="web"
          className="flex flex-col items-center justify-center gap-4 my-10"
        >
          <div className="text-3xl font-bold flex justify-center text-white gap-2">
            Nos servies <span className="text-blue-400">web</span>
          </div>
          <div className="flex p-5 justify-between gap-5">
            <Card>
              <CardHeader>
                <CardTitle>Site vitrine</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quas?
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Site e-commerce</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quas?
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Application web</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quas?
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Button
            variant={"secondary"}
            className="rounded-full bg-blue-400 hover:bg-blue-500 hover:scale-105 transition-all ease-in-out text-white"
          >
            Demander un devis
          </Button>
        </section>
        <section
          id="graphisme"
          className="flex flex-col items-center justify-center gap-4 py-10 bg-slate-400"
        >
          <div className="text-3xl font-bold flex justify-center text-white gap-2">
            Nos servies <span className="text-blue-500">graphiques</span>
          </div>
          <div className="flex items-stretch p-5 justify-between gap-5">
            <Card>
              <CardHeader>
                <CardTitle>Logo</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quas?
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Charte graphique</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quas?
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Affiche publicitaire</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, quas?
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <Button
            variant={"secondary"}
            className="rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all ease-in-out text-white"
          >
            Demander un devis
          </Button>
        </section>
        <section
          id="avis"
          className="flex flex-col items-center justify-center gap-4 py-10"
        >
          <div className="text-3xl font-bold flex justify-center text-white">
            Avis
          </div>
          <div className="flex items-stretch p-5 justify-between gap-5">
            <Card>
              <CardHeader>
                <div className="flex gap-1">
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                </div>
                <CardTitle>Lorem, ipsLorem</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet r sit a, adipisicing elit.
                  adipisicing voluptas, ullam dolorum ut quis dolesseesse ad ea!
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex gap-1">
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                </div>
                <CardTitle>Lorem, ipsLorem</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet r sit a, adipisicing elit.
                  adipisicing voluptas, ullam dolorum ut quis dolesseesse ad ea!
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex gap-1">
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                  <FaStar className="fill-yellow-200 stroke-black stroke-10" />
                </div>
                <CardTitle>Lorem, ipsLorem</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor sit amet r sit a, adipisicing elit.
                  adipisicing voluptas, ullam dolorum ut quis dolesseesse ad ea!
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}
