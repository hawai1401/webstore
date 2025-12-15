import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <div className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <Image src={"/logo.png"} alt="logo" width={50} height={50} />
          <p>
            WebStore
            <br />
            Expert en développement web et en graphisme depuis 2015.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Légal</h6>
          <Link href={"/legal/cgu"} className="link link-hover">
            CGU
          </Link>
          <Link href={"/legal/cgv"} className="link link-hover">
            CGV
          </Link>
          <Link href={"/legal/mentions-legales"} className="link link-hover">
            Mentions Légales
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link href={"/services/web"} className="link link-hover">
            Web
          </Link>
          <Link href={"/services/graphisme"} className="link link-hover">
            Graphisme
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <ul className="flex items-center justify-center gap-2 mb-1">
            <li>
              <Link href="https://wa.me/+33909090909">
                <FaWhatsapp
                  size={20}
                  className="hover:fill-green-500 transition-all ease-in-out"
                />
              </Link>
            </li>
            <li>
              <Link href="htttps://instagram.com/webstore">
                <FaInstagram
                  size={20}
                  className="hover:fill-pink-400 transition-all ease-in-out"
                />
              </Link>
            </li>
            <li>
              <Link href="https://m.me/webstore">
                <RiMessengerLine
                  size={22}
                  className="hover:fill-blue-500 transition-all ease-in-out"
                />
              </Link>
            </li>
          </ul>
          <Link href="tel:+33909090909" className="link link-hover">
            +33 9 09 09 09 09
          </Link>
          <Link href="mailto:contact@webstore.fr" className="link link-hover">
            contact@webstore.fr
          </Link>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - Tout droits réservés par WebStore</p>
        </aside>
      </div>
    </footer>
  );
}
