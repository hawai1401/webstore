import Image from "next/image";
import Link from "next/link";

export default function GraphismeServices() {
  return (
    <>
      <section id="hero" className="py-8 bg-base-300">
        <h1 className="text-center text-4xl font-semibold">
          Services <span className="text-blue-500">Graphiques</span>
        </h1>
      </section>
      <section
        id="Logo"
        className="flex flex-wrap items-stretch p-5 justify-between gap-10"
      >
        <div className="card bg-base-100 w-96 shadow-sm flex-1 min-w-100 hover:scale-105 transition duration-300">
          <figure className="px-10 pt-10">
            <Image
              src="/services/graphisme/entreprise.png"
              alt="Entreprise"
              width={218}
              height={218}
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-center">
              Logo d&apos;entreprise
              <div className="badge badge-secondary p-2 rounded-lg">
                NOUVEAU
              </div>
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
              eligendi dolorum sint reiciendis dignissimos nostrum consequuntur.
              Eos, blanditiis. Quasi ipsam eum odio voluptas facilis sunt
              perferendis eveniet dolor cumque assumenda, expedita inventore,
              nisi, nihil dolorum iure? Provident alias harum voluptatibus
              sapiente voluptatum expedita, temporibus vero nisi inventore
              itaque excepturi!
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary rounded-xl hover:scale-105 transition duration-300">
                <Link href={"/devis?service=logo"}>Demander un devis</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm flex-1 min-w-100 hover:scale-105 transition duration-300">
          <figure className="px-10 pt-10">
            <Image
              src="/services/graphisme/charte-graphique.png"
              alt="Entreprise"
              width={388}
              height={218}
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-center">
              Charte graphique complète
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
              eligendi dolorum sint reiciendis dignissimos nostrum consequuntur.
              Eos, blanditiis. Quasi ipsam eum odio voluptas facilis sunt
              perferendis eveniet dolor cumque assumenda, expedita inventore,
              nisi, nihil dolorum iure? Provident alias harum voluptatibus
              sapiente voluptatum expedita, temporibus vero nisi inventore
              itaque excepturi!
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary rounded-xl hover:scale-105 transition duration-300">
                <Link href={"/devis?service=charte"}>Demander un devis</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-sm flex-1 min-w-100 hover:scale-105 transition duration-300">
          <figure className="px-10 pt-10">
            <Image
              src="/services/graphisme/affiche.png"
              alt="Entreprise"
              width={388}
              height={218}
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-center">Affiche publicitaire</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum omnis
              eligendi dolorum sint reiciendis dignissimos nostrum consequuntur.
              Eos, blanditiis. Quasi ipsam eum odio voluptas facilis sunt
              perferendis eveniet dolor cumque assumenda, expedita inventore,
              nisi, nihil dolorum iure? Provident alias harum voluptatibus
              sapiente voluptatum expedita, temporibus vero nisi inventore
              itaque excepturi!
            </p>
            <div className="card-actions mt-4">
              <button className="btn btn-primary rounded-xl hover:scale-105 transition duration-300">
                <Link href={"/devis?service=affiche"}>Demander un devis</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
