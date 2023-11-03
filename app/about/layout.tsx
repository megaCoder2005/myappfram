import Link from 'next/link'
import React, { ReactNode } from 'react'

const layout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <h1>About us</h1>
        
        <ul>
            <li><Link href="/about/contacts">Contacts</Link></li>
            <li><Link href="/about/team">team</Link></li>
        </ul>
        {children}
    </div>
  )
}

export default layout