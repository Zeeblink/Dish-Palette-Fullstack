'use client'

import { usePathname } from 'next/navigation'
import MainLayout from '../layouts/MainLayout'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // List of paths that should not use the MainLayout
  const excludedPaths = ['/sign-in', '/sign-up', '/sign-up/verify-email-address']

  if (excludedPaths.includes(pathname)) {
    return <main className='flex min-h-screen flex-col justify-center items-center'>{children}</main>
  }

  return <MainLayout>{children}</MainLayout>
}