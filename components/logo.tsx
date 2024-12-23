'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import styles from './logo.module.css';
import { useEffect } from 'react';

function ThemedImage() {
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  const lightSrc = '/dark.png';
  const darkSrc = '/light.png';
  const lightFaviconSrc= '/faviconlight.png';
  const darkFaviconSrc = '/favicondark.png';
  const isDark = resolvedTheme === 'dark' || theme === 'dark';
  useEffect(() => {
    router.prefetch('/');
  })
  return (<>
    <Image
      src={isDark ? darkSrc : lightSrc}
      width={200}
      height={45}
      alt="Logo"
      onClick={() => router.push('/')}
      className={`${styles.logo} cursor-pointer transition-opacity duration-300`}
    />
    <Image
      src={isDark ? lightFaviconSrc : darkFaviconSrc}
      width={50}
      height={42}
      alt="Logo"
      onClick={() => router.push('/')}
      className="cursor-pointer transition-opacity duration-300 md:hidden"
    />
    </>
  );
}

export default ThemedImage;
