import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Image from "../components/Home/LandingPage/Image";
import barket from "../assets/barket.png";
import zotlivraison from "../assets/zotlivraison.png";
import uber from "../assets/uber.png";

export default function Home({ helmet }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex-col home">
      <Helmet>
        <title> {helmet.title} | Accueil </title>
        <link rel="canonical" href={helmet.href} />
        <meta name="description" content={helmet.description} />
      </Helmet>

      <Image title={helmet.title} />
      <section className="articles_container">
        <article>
          <h2>Découvrez notre entreprise familiale</h2>
          <img src="" alt="" />
          <p>
            Bienvenue chez Planet Pizza, votre destination pour des pizzas
            délicieuses à Saint-Denis. Ici, chaque pizza est cuite avec soin et
            amour dans nos fours. Nous sommes fiers d'être une entreprise
            familiale qui offre des pizzas délicieuses à nos clients depuis de
            nombreuses années. Que vous optiez pour une margherita classique,
            une pepperoni épicée, ou quelque chose de plus original, nous avons
            la pizza parfaite pour vous.
          </p>
        </article>
        <article>
          <h2>Des pizzas Halal de qualité</h2>
          <img src="" alt="" />
          <p>
            Nous utilisons les ingrédients les plus frais et conformes aux
            normes halal pour préparer nos pizzas. Tous nos produits sont
            d'ailleurs labelisés halal Réunion. Nous attachons un soin
            particulier à la selection de nos ingrédients et à la satisfaction
            de vos papilles.
          </p>
        </article>
      </section>
      <section>
        <div className="iframe">
          <h2>Nous retrouver</h2>
          <p>
            Nous sommes ravis de vous retrouver dans nos locaux à Saint-Denis.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.0745646142047!2d55.45360514743608!3d-20.8829594607785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21827f06fb2d8581%3A0x24bcf04f3459092f!2s94%20Rue%20Sainte-Marie%2C%20Saint-Denis%2097400%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1675499040432!5m2!1sfr!2sfr"
            title="google maps"
          />
          <p>Retrouver nos pizzas également sur différentes plateformes</p>
          <ul className="barket">
            <a href="https://barket.re">
              <li>
                <img src={barket} alt="barket.re" />
              </li>
            </a>{" "}
            <a href="https://zotlivraison.com/stores/planet-pizza-nepc1igoxb6jipu?fbclid=IwAR3n1PDcVYy--VBbIItZjIPmqlPXsldYM7cRJ2ldd--PbV3deytuV13nfQo">
              <li>
                <img src={zotlivraison} alt="" />
              </li>
            </a>{" "}
            <a href="https://www.ubereats.com/fr/feed?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkFyb2QlMkMlMjBsaWJyYWlyaWUlMjByZWxpZ2lldXNlJTJDJTIwU2FpbnQtRGVuaXMlMjA5NzQwMCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMkNoSUpXYng1a3Q1X2dpRVIxdkJzYkp0U3djWSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJnb29nbGVfcGxhY2VzJTIyJTJDJTIybGF0aXR1ZGUlMjIlM0EtMjAuODgzMDE4Njk5OTk5OTklMkMlMjJsb25naXR1ZGUlMjIlM0E1NS40NTkxNjA3JTdE">
              <li>
                <img src={uber} alt="" />
              </li>
            </a>
          </ul>
        </div>
        <div>
          <h2>Nous contacter</h2>
          <p>
            Téléphone :<a href="tel:+262262 47 78 61"> 02 62 47 78 61</a>
          </p>
          <p>
            Email : {"  "}
            <a
              href="mailto:mathieugueguin@live.fr
"
            >
              mathieugueguin@live.fr
            </a>
          </p>
          <ul>
            <li>Lundi : Fermé</li>
            <li>Mardi : 11h-14h | 18h-22h</li>
            <li>Mercredi : 11h-14h | 18h-22h</li>
            <li>Jeudi : 11h-14h | 18h-22h</li>
            <li>Vendredi : 11h-14h | 18h-22h</li>
            <li>Samedi : 18h-22h</li>
            <li>Dimanche :18h-22h</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
