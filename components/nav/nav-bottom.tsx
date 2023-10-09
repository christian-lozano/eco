import MenuIcon from '@material-design-icons/svg/outlined/menu.svg'
import { Drawer } from '@material-tailwind/react'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'

import { Laptop, Tablet } from '@/lib/media'
import { parseUrl } from '@/utils/parseUrl'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'

import { NavAutocomplete } from './nav-autocomplete'
import { NavItem } from './nav-item'

export function NavBottom() {
  const router = useRouter()
  const currentCategory = useMemo(() => {
    const { pathname } = parseUrl(router?.asPath)
    return pathname.match(/\/catalog\/(.[^/]*)\/?/)?.[1]
  }, [router?.asPath])

  // menu useState
  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)
  const genderSubCategories = (
    <>
      {currentCategory === 'Women' && (
        <NavItem label="Bags" href={`/catalog/${currentCategory}/Bags`} />
      )}
      <NavItem label="Clothing" href={`/catalog/${currentCategory}/Clothing`} />
      <NavItem label="Shoes" href={`/catalog/${currentCategory}/Shoes`} />
    </>
  )

  const accessoriesSubCategories = (
    <>
      <NavItem label="Men" href={`/catalog/${currentCategory}/Men`} />
      <NavItem label="Women" href={`/catalog/${currentCategory}/Women`} />
    </>
  )

  return (
    <div className="flex items-center px-4 relative divide-x border-b border-neutral-light laptop:h-12 laptop:mx-20 laptop:mb-5 laptop:px-0 laptop:justify-between laptop:border-none laptop:divide-none">
      <Tablet>
        <Button className="p-3 pl-0" onClick={openDrawer}>
          <IconLabel icon={MenuIcon} label="Menu" labelPosition="right" />
        </Button>
      </Tablet>
      {/* mobile   menu*/}

      <Drawer
        open={open}
        className="p-4"
        nonce={undefined}
        onClose={closeDrawer}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <a href="/hombre" onClick={() => setOpen(!open)}>
          <div className="w-full bg-red-200 h-5">
            <span> Hombre</span>
          </div>
        </a>
      </Drawer>

      <Laptop>
        {currentCategory && (
          <nav>
            <ul className="flex gap-6 small-uppercase">
              {currentCategory === 'Accessories'
                ? accessoriesSubCategories
                : genderSubCategories}
            </ul>
          </nav>
        )}
      </Laptop>

      <NavAutocomplete />
    </div>
  )
}
