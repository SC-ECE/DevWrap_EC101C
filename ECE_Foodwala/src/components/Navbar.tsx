import Image from "next/image";
import Link from "next/link";

import Menu from "./Menu";
const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">ECEFOODWALA</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1 ">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 bg-orange-300 px-1 rounded-md cursor-pointer">
          <Image src="/phone.png" alt="" width={20} height={20} />
          123 456 78
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Orders</Link>
        )}
        <Link href="/">
         
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
