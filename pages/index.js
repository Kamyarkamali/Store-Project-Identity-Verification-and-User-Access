import { Inter } from 'next/font/google'
import HomePage from '@/Components/templates/HomePage'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {status}=useSession()

  const router=useRouter()

  useEffect(()=>{
    if(status==="unauthenticated"){
      router.replace("/singin")
    }
  },[status])

  return (
    <main>
      <HomePage/>
    </main>
  )
}
