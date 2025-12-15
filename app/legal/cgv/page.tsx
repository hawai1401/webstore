export default function CGV() {
  return (
    <>
      <section id="hero" className="py-8 bg-base-300">
        <h1 className="text-center text-4xl font-semibold">
          Conditions Générales de <span className="text-blue-500">Vente</span>
        </h1>
      </section>
      <section id="contenu" className="flex flex-col gap-5 p-10">
        <p className="text-justify">
          Les présentes conditions générales de vente (dites «{" "}
          <strong>CGV</strong> ») ont pour objet de définir les droits et
          obligations de la société Web Store et de ses clients dans le cadre de
          la vente de produits et services proposés sur le site webstore.fr.{" "}
          <br />
          <br />
          Les présentes CGV sont accessibles à tout moment sur le site à la
          rubrique « <strong>CGV</strong> ».
        </p>

        <div>
          <h2 className="text-2xl text-blue-500">ARTICLE 1 : Objet</h2>
          <p className="text-justify">
            Les présentes CGV régissent les ventes de produits et de services
            effectuées par Web Store auprès de tout client souhaitant effectuer
            un achat via le site webstore.fr.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-blue-500">ARTICLE 2 : Prix</h2>
          <p className="text-justify">
            Les prix sont indiqués en euros toutes taxes comprises (TTC). Web
            Store se réserve le droit de modifier ses prix à tout moment, étant
            toutefois entendu que le prix figurant au moment de la commande sera
            celui appliqué au client.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-blue-500">ARTICLE 3 : Commande</h2>
          <p className="text-justify">
            Toute commande passée sur le site implique l’acceptation sans
            réserve des présentes CGV. Le client reconnaît avoir pris
            connaissance des informations nécessaires avant la validation de sa
            commande.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-blue-500">ARTICLE 4 : Paiement</h2>
          <p className="text-justify">
            Le paiement est exigible immédiatement à la commande. Les paiements
            peuvent être effectués par carte bancaire ou tout autre moyen
            proposé sur le site. En cas de refus de paiement, la commande sera
            automatiquement annulée.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-blue-500">ARTICLE 5 : Livraison</h2>
          <p className="text-justify">
            Les produits numériques sont fournis immédiatement après
            confirmation du paiement. Pour les produits physiques, les délais de
            livraison sont donnés à titre indicatif et peuvent varier selon la
            destination.
          </p>
          <p className="text-justify">
            Web Store ne pourra être tenu responsable des retards de livraison
            dus à des causes indépendantes de sa volonté.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-blue-500">
            ARTICLE 6 : Droit de rétractation
          </h2>
          <p className="text-justify">
            Conformément à la réglementation en vigueur, le client dispose d’un
            délai de rétractation de 14 jours à compter de la date de la
            commande, sauf pour les produits numériques déjà fournis ou
            personnalisés.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-blue-500">ARTICLE 7 : Responsabilité</h2>
          <p className="text-justify">
            Web Store ne saurait être tenu responsable des dommages indirects
            pouvant survenir du fait de l’achat ou de l’utilisation des produits
            ou services proposés.
          </p>
        </div>

        <div>
          <h2 className="text-2xl text-blue-500">
            ARTICLE 8 : Droit applicable et litiges
          </h2>
          <p className="text-justify">
            Les présentes CGV sont soumises au droit français. En cas de litige
            et à défaut de résolution amiable, les tribunaux français seront
            seuls compétents.
          </p>
        </div>
      </section>
    </>
  );
}
