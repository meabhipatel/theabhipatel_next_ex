import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute left-10 top-20 flex w-[40%] justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-600/40 px-20">
      <h1>Next js</h1>
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
