'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

function ThemedImage() {
  const { theme, resolvedTheme } = useTheme();
  const router = useRouter();
  const lightSrc = '/dark.png';
  const darkSrc = '/light.png';
  const isDark = resolvedTheme === 'dark' || theme === 'dark';
  return (
    <Image
      src={isDark ? darkSrc : lightSrc}
      width={200}
      height={45}
      alt="Logo"
      priority
      onClick={() => router.push('/')}
      className="cursor-pointer transition-opacity duration-300"
    />
  );
}

export default ThemedImage;
