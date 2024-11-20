"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

function Home() {
  return (
    <>
      <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#000' }}>
        <Link href="/dark-mode">dark-mode</Link>
        <Link href="/light-mode">light-mode</Link>
      </div>
    </>
  )
}

export default Home;