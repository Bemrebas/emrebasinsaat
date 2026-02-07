"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  invertForDark?: boolean;
}

const sizeMap = {
  sm: { width: 120, height: 60, className: "w-[120px] h-auto" },
  md: { width: 180, height: 90, className: "w-[150px] md:w-[180px] h-auto" },
  lg: { width: 200, height: 100, className: "w-[180px] md:w-[200px] h-auto" },
};

export default function Logo({ className = "", size = "md", invertForDark = false }: LogoProps) {
  const s = sizeMap[size];

  return (
    <Image
      src="/images/logo.png"
      alt="Emrebaş İnşaat - Kum Ocağı & Hafriyat"
      width={s.width}
      height={s.height}
      className={`${s.className} object-contain ${invertForDark ? "dark:brightness-0 dark:invert" : ""} ${className}`}
      priority
    />
  );
}
