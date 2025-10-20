import { Button } from '@/components/ui/button'
import { Input } from '@/registry/carbon/input'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-4'>
      <div className='flex items-center gap-6'>
        <h1>LOGO</h1>

        <ul className='flex items-center gap-6'>
          <li>
            <Link href=''>Docs</Link>
          </li>
          <li>
            <Link href=''>Docs</Link>
          </li>
          <li>
            <Link href=''>Docs</Link>
          </li>
          <li>
            <Link href=''>Docs</Link>
          </li>
          <li>
            <Link href=''>Docs</Link>
          </li>
          <li>
            <Link href=''>Docs</Link>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-4'>
        <Input size='sm' placeholder='Search...' />
        <Link href=''>
          <Icon icon='carbon:logo-github' fontSize='18px' />
        </Link>
      </div>
    </nav>
  )
}
