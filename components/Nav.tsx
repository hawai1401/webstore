"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="flex items-center justify-center gap-10 bg-slate-200 p-5 sticky top-0 left-0 w-full z-50 shadow-md">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
        <div className="text-xl">
          Web<span className="text-blue-500">Store</span>
        </div>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href="/">Accueil</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[200px] gap-4 p-4">
                <li className="group">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/web"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      Web
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li className="group">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/services/graphisme"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      Graphisme
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
