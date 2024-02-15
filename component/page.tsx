"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../style/navigation.module.css";

export default function Navigate() {
  const path = usePathname();
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/about-us">AboutUs</Link>
        </li>
      </ul>
    </nav>
  );
}
