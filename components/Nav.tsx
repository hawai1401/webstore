import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="navbar dark:text-white bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={"/"} className="text-xl flex items-center">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={36}
            height={36}
            className="p-0.5 mr-2"
          />
          Web<span className="text-blue-500">Store</span>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Accueil</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <Link href={"/services/web"}>Web</Link>
                </li>
                <li>
                  <Link href={"/services/graphisme"}>Grapisme</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
}
