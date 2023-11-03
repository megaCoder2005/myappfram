import Link from 'next/link'
import React from 'react'

const TheHeader = () => {
  return (
    <header>
        <Link href="/">Home</Link>
        <Link href="/about">about</Link>
        <Link href="/blog">blog</Link>
    </header>
  )
}

export default TheHeader