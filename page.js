"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// HINT: Use the `usePathname` hook to get the current pathname.
// HINT: Use the `clsx` utility to conditionally apply the 'dark-mode' class.
// HINT: There should also be two new pages we are redirecting to. Think about how we make more pages within Next.js.

function Home() {
  // Your code here
  const style = clsx({'dark-mode': usePathname() === '/dark-mode'});
  const dark = () => {
    return (
      <Link href="/dark-mode">
        <button>Go to Dark Mode</button>
      </Link>
    );
  }
  const light = () => {
    window.location.href = '/light-mode';
  }
  return (
    <>
      <div className={style} style={{ minHeight: '100vh', padding: '20px' }}></div>
      <Link href="/dark-mode">dark-mode</Link>
      <Link href="/light-mode">light-mode</Link>
    </>
  )
}

export default Home;