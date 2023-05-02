import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Input } from './components'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>this is landing page</span>
      <Link href={'/home'}>
        <span>go to home page</span>
      </Link>
    </main>
  )
}
