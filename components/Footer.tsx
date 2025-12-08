import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 gap-4 bg-slate-200 p-5 relative z-50 shadow-md">
      <div className="flex flex-col items-center gap-3">
        <div className="text-xl mb-2">
          Web<span className="text-blue-500">Store</span>
        </div>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a
          sapiente tenetur suscipit, expedita est cum maxime temporibus!
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-xl mb-2 text-blue-500">Légal</div>
        <ul className="flex flex-col items-center">
          <li className="hover:underline">
            <Link href="">CGU</Link>
          </li>
          <li className="hover:underline">
            <Link href="">CGV</Link>
          </li>
          <li className="hover:underline">
            <Link href="">Mentions Légales</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-xl mb-2 text-blue-500">Services</div>
        <ul className="flex flex-col items-center">
          <li className="hover:underline">
            <Link href="">Web</Link>
          </li>
          <li className="hover:underline">
            <Link href="">Graphisme</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-xl mb-2 text-blue-500">Contact</div>
        <ul className="flex flex-col items-center">
          <ul className="flex items-center justify-center gap-2 mb-4">
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
          <li className="hover:underline">
            <Link href="tel:+33909090909">+33 9 09 09 09 09</Link>
          </li>
          <li className="hover:underline">
            <Link href="mailto:contact@webstore.fr">contact@webstore.fr</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
