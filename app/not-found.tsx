"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to quote page to encourage users to leave contact information
    router.replace("/quote")
  }, [router])

  // Show a brief message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">正在跳转...</p>
      </div>
    </div>
  )
}

