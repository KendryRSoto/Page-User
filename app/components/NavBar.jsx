import Link from "next/link";

export default function NavBar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/servide">Service</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="./about">About</Link>
        </li>
      </ul>
    </div>
  );
}
