"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  // Your code here
  const style = clsx({'dark-mode': usePathname() === '/dark-mode'});
  return (
    <>
      <div className={style}>
        <Link href="/dark-mode">dark-mode</Link>
        <Link href="/light-mode">light-mode</Link>
      </div>
    </>
  )
}

export default Home;