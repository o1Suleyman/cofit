'use client';
import Image from 'next/image'
import { useTheme } from 'next-themes'

function ThemedImage() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case 'light':
      src = '/dark.png'
      break
    case 'dark':
      src = '/light.png'
      break
    default:
      src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
      break
  }

  return <Image src={src} width={200} height={45} alt="Logo" />
}

export default ThemedImage