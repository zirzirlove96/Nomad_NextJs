"use client";

import Link from "next/link";
import styles from "../style/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: MovieProps) {
  const router = useRouter(); //hook 을 썻으므로 use client 해줘야함
  const moveLink = () => {
    return router.push(`/movie/${id}`);
  };
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={moveLink}></img>
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
}
