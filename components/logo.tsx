'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import styles from './logo.module.css';

function ThemedImage() {
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  const lightSrc = '/dark.png';
  const darkSrc = '/light.png';
  const lightFaviconSrc= '/faviconlight.png';
  const darkFaviconSrc = '/favicondark.png';
  const isDark = resolvedTheme === 'dark' || theme === 'dark';
  return (<>
    <Image
      src={isDark ? darkSrc : lightSrc}
      width={200}
      height={45}
      alt="Logo"
      onClick={() => router.prefetch('/')}
      className={`${styles.logo} cursor-pointer transition-opacity duration-300`}
    />
    <Image
      src={isDark ? lightFaviconSrc : darkFaviconSrc}
      width={50}
      height={42}
      alt="Logo"
      onClick={() => router.prefetch('/')}
      className="cursor-pointer transition-opacity duration-300 md:hidden"
    />
    </>
  );
}

export default ThemedImage;
