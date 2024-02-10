"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const path = usePathname();
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/about-us">AboutUs</Link>
        </li>
      </ul>
    </div>
  );
}
