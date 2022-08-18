import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/welcome">Welcome</Link>
      <Link href="/products">Products</Link>
    </div>
  );
};

export default Navbar;
