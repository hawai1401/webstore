export default function CGU() {
  return (
    <>
      <section
        id="hero"
        className="py-8 bg-base-300 flex flex-col items-center justify-center"
      >
        <h1 className="text-center text-4xl font-semibold">
          Conditions Générales d&apos;
          <span className="text-blue-500">utilisation</span>
        </h1>
        <p className="italic">En vigueur au 15/12/2025</p>
      </section>
      <section id="contenu" className="flex flex-col gap-5 p-10">
        <p className="text-justify">
          Les présentes conditions générales d&apos;utilisation (dites «
          <strong>CGU</strong> ») ont pour objet l&apos;encadrement juridique
          des modalités de mise à disposition du site et des services par Web
          Store et de définir les conditions d’accès et d’utilisation des
          services par « <strong>l&apos;Utilisateur</strong> ». <br />
          <br />
          Les présentes CGU sont accessibles sur le site à la rubrique «{" "}
          <strong>CGU</strong> ».
        </p>
        <div>
          <h2 className="text-2xl text-blue-500">
            Article 1 : Les mentions légales
          </h2>
          <p className="text-justify">
            L’édition et la direction de la publication du site webstore.fr est
            assurée par Web Store, domicilié 50 rue d&apos;Hauteville, 75010
            Paris.
            <br />
            Numéro de téléphone est +33 9 09 09 09 09
            <br />
            Adresse e-mail contact@webstore.fr.
            <br />
            <br />
            L&apos;hébergeur du site webstore.fr est la société Heroku Inc.,
            dont le siège social est situé au 650 7th Street, San Francisco, CA,
            avec le numéro de téléphone : +33 1 (877) 563-4311.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-blue-500">ARTICLE 2 : Accès au site</h2>
          <p className="text-justify">
            Le site est accessible gratuitement en tout lieu à tout Utilisateur
            ayant un accès à Internet. Tous les frais supportés par
            l&apos;Utilisateur pour accéder au service (matériel informatique,
            logiciels, connexion Internet, etc.) sont à sa charge.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-blue-500">
            ARTICLE 3 : Collecte des données
          </h2>
          <p className="text-justify">
            Le site assure à l&apos;Utilisateur une collecte et un traitement
            d&apos;informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l&apos;informatique, aux fichiers et aux libertés.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-blue-500">
            ARTICLE 4 : Propriété intellectuelle
          </h2>
          <p className="text-justify">
            Les marques, logos, signes ainsi que tous les contenus du site
            (textes, images, son…) font l&apos;objet d&apos;une protection par
            le Code de la propriété intellectuelle et plus particulièrement par
            le droit d&apos;auteur.
          </p>
          <p className="text-justify">
            La marque Web Store est une marque déposée par Web Store.Toute
            représentation et/ou reproduction et/ou exploitation partielle ou
            totale de cette marque, de quelque nature que ce soit, est
            totalement prohibée.
          </p>
          <p className="text-justify">
            L&apos;Utilisateur doit solliciter l&apos;autorisation préalable du
            site pour toute reproduction, publication, copie des différents
            contenus. Il s&apos;engage à une utilisation des contenus du site
            dans un cadre strictement privé, toute utilisation à des fins
            commerciales et publicitaires est strictement interdite.
          </p>
          <p className="text-justify">
            Toute représentation totale ou partielle de ce site par quelque
            procédé que ce soit, sans l’autorisation expresse de l’exploitant du
            site Internet constituerait une contrefaçon sanctionnée par
            l’article L 335-2 et suivants du Code de la propriété
            intellectuelle.
          </p>
          <p className="text-justify">
            Il est rappelé conformément à l’article L122-5 du Code de propriété
            intellectuelle que l’Utilisateur qui reproduit, copie ou publie le
            contenu protégé doit citer l’auteur et sa source.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-blue-500">ARTICLE 5 : Responsabilité</h2>
          <p className="text-justify">
            Les sources des informations diffusées sur le site webstore.fr sont
            réputées fiables mais le site ne garantit pas qu’il soit exempt de
            défauts, d’erreurs ou d’omissions.
          </p>
          <p className="text-justify">
            Les informations communiquées sont présentées à titre indicatif et
            général sans valeur contractuelle. Malgré des mises à jour
            régulières, le site webstore.fr ne peut être tenu responsable de la
            modification des dispositions administratives et juridiques
            survenant après la publication. De même, le site ne peut être tenue
            responsable de l’utilisation et de l’interprétation de l’information
            contenue dans ce site.
            <br />
            Le site webstore.fr ne peut être tenu pour responsable d’éventuels
            virus qui pourraient infecter l’ordinateur ou tout matériel
            informatique de l’Internaute, suite à une utilisation, à l’accès, ou
            au téléchargement provenant de ce site.
          </p>
          <p className="text-justify">
            La responsabilité du site ne peut être engagée en cas de force
            majeure ou du fait imprévisible et insurmontable d&apos;un tiers.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-blue-500">
            ARTICLE 6 : Droit applicable et juridiction compétente
          </h2>
          <p className="text-justify">
            La législation française s&apos;applique au présent contrat. En cas
            d&apos;absence de résolution amiable d&apos;un litige né entre les
            parties, les tribunaux français seront seuls compétents pour en
            connaître. Pour toute question relative à l’application des
            présentes CGU, vous pouvez joindre l’éditeur aux coordonnées
            inscrites à l’ARTICLE 1.
          </p>
        </div>
      </section>
    </>
  );
}
