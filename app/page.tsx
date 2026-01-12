import Avi from "@/components/Avi";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Hyperspeed from "@/components/Hyperspeed";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="absolute w-full overflow-hidden h-[calc(100vh-65px)] bg-black">
        <Hyperspeed />
      </div>
      <section
        id="hero"
        className="text-white relative flex flex-col justify-center items-center p-8 w-full h-[calc(100vh-65px)]"
      >
        <div className="backdrop-blur-sm p-8 rounded-3xl flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-3">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            <h1 className="text-5xl">
              Web<span className="text-blue-500">Store</span>
            </h1>
          </div>
          <p className="text-white italic text-lg">
            Expert en développement web et en graphisme depuis 2015.
          </p>
        </div>
      </section>
      <section
        id="web"
        className="flex flex-col items-center justify-center gap-4 py-10 bg-base-100 "
      >
        <div className="text-3xl font-bold flex justify-center gap-2">
          Nos services <span className="text-blue-400">web</span>
        </div>
        <div className="flex p-5 justify-between gap-5">
          <Card className="hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle>Site vitrine</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur saepe voluptatibus totam deserunt accusamus officiis.
                Nisi modi, iusto porro, doloribus impedit eveniet omnis aliquam
                animi et consectetur possimus. Modi, nemo.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle>Site e-commerce</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur saepe voluptatibus totam deserunt accusamus officiis.
                Nisi modi, iusto porro, doloribus impedit eveniet omnis aliquam
                animi et consectetur possimus. Modi, nemo.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle>Application web</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur saepe voluptatibus totam deserunt accusamus officiis.
                Nisi modi, iusto porro, doloribus impedit eveniet omnis aliquam
                animi et consectetur possimus. Modi, nemo.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Button
          variant={"secondary"}
          className="rounded-full bg-blue-400 hover:bg-blue-500 hover:scale-105 transition-all ease-in-out text-white cursort-pointer"
        >
          <Link href={"/services/web"}>Plus d&apos;informations</Link>
        </Button>
      </section>
      <section
        id="graphisme"
        className="flex flex-col items-center justify-center gap-4 py-10 bg-base-200"
      >
        <div className="text-3xl font-bold flex justify-center  gap-2">
          Nos services <span className="text-blue-400">graphiques</span>
        </div>
        <div className="flex items-stretch p-5 justify-between gap-5">
          <Card className="hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle>Logo</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur saepe voluptatibus totam deserunt accusamus officiis.
                Nisi modi, iusto porro, doloribus impedit eveniet omnis aliquam
                animi et consectetur possimus. Modi, nemo.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle>Charte graphique</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur saepe voluptatibus totam deserunt accusamus officiis.
                Nisi modi, iusto porro, doloribus impedit eveniet omnis aliquam
                animi et consectetur possimus. Modi, nemo.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle>Affiche publicitaire</CardTitle>
              <CardDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tenetur saepe voluptatibus totam deserunt accusamus officiis.
                Nisi modi, iusto porro, doloribus impedit eveniet omnis aliquam
                animi et consectetur possimus. Modi, nemo.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <Button
          variant={"secondary"}
          className="rounded-full bg-blue-400 hover:bg-blue-500 hover:scale-105 transition-all ease-in-out text-white"
        >
          <Link href={"/services/graphisme"}>Plus d&apos;informations</Link>
        </Button>
      </section>
      <section
        id="avis"
        className="flex flex-col items-center justify-center gap-4 py-10 bg-base-300"
      >
        <div className="text-3xl font-bold flex justify-center gap-2">
          Ce que nos clients en <span className="text-blue-400">pense</span>
        </div>
        <div className="flex items-stretch p-5 justify-between gap-5">
          <Avi />
          <Avi />
          <Avi />
        </div>
      </section>
    </>
  );
}
