import { Suspense } from "react";
import Container from "@/components/global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import { ModeToggle } from "./DarkMode";
import LinksDropdown from "./LinksDropdown";

export default function Navbar() {
  return (
    <div className="border-b ">
      <Container className="flex flex-col gap-4 py-8 sm:flex-row sm:justify-between sm:items-center ">
        <Logo />
        {/* if we don't wrap Navsearch component around the <Suspense>, it will force the static pages ,like: about page ,render as  the same as the client components 
        https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout
        */}
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartButton />
          <ModeToggle />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
}
