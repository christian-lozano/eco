// import FavoriteIcon from '@material-design-icons/svg/outlined/favorite_border.svg'
// import HeadsetMicIcon from '@material-design-icons/svg/outlined/headset_mic.svg'
// import PersonIcon from '@material-design-icons/svg/outlined/person.svg'
import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import { Drawer, IconButton } from '@material-tailwind/react'
import dynamic from 'next/dynamic'
import { memo, useState } from 'react'

import type { LogoProps } from '@/components/logo/logo'
import { NavItem } from '@/components/nav/nav-item'
import { Tablet, Laptop } from '@/lib/media'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'
import { Link } from '@ui/link/link'

const Logo = dynamic<LogoProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/logo/logo').then(
    (mod) => mod.Logo
  )
)

export const NavTop = memo(function NavTop() {
  const [openCart, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const setOpenCart = () => setOpen(false)
  return (
    <div className="flex flex-col px-4 py-2 border-b border-neutral-light laptop:mx-20 laptop:px-0 laptop:pt-8 laptop:pb-0 laptop:mb-5">
      <div className="flex justify-between w-full gap-3 laptop:mb-8">
        <div className="flex items-center">
          <Logo />
        </div>
        <nav className="hidden laptop:block">
          <ul className="hidden gap-6 uppercase laptop:flex">
            <NavItem label="Mujer" href="/catalog/Women" />
            <NavItem label="Hombre" href="/catalog/Men" />
            <NavItem label="Accesorios" href="/catalog/Accessories" />
          </ul>
        </nav>

        <div className="flex gap-48">
          <div className="hidden items-center gap-8 laptop:flex">
            {/* <Link
              href="/support"
              title="Support"
              className="can-hover:transition-colors can-hover:hover:text-neutral-dark"
              onClick={(e) => e.preventDefault()}
            >
              <IconLabel
                icon={HeadsetMicIcon}
                label="Support"
                labelPosition="right"
                classNameLabel="label-regular"
              />
            </Link> */}
            <Link
              href="/store-locator"
              title="Ubicanos"
              className="can-hover:transition-colors can-hover:hover:text-neutral-dark"
              onClick={(e) => e.preventDefault()}
            >
              <IconLabel
                icon={PinDropIcon}
                label="Ubicanos"
                labelPosition="right"
                classNameLabel="label-regular"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6 laptop:gap-3">
            <Tablet>
              <Button title="Ubicanos">
                <IconLabel icon={PinDropIcon} label="Ubicanos" />
              </Button>
            </Tablet>
            {/* <Laptop>
              <Button title="Favorites">
                <IconLabel icon={FavoriteIcon} />
              </Button>
            </Laptop> */}

            {/* <Button title="Account">
              <Tablet>
                <IconLabel icon={PersonIcon} label="Account" />
              </Tablet>
              <Laptop>
                <IconLabel icon={PersonIcon} />
              </Laptop>
            </Button> */}

            <Button title="Cart" onClick={openDrawer}>
              <Tablet>
                <IconLabel icon={ShoppingBagIcon} label="Cart" />
              </Tablet>
              <Laptop>
                <IconLabel icon={ShoppingBagIcon} />
              </Laptop>
            </Button>
            {/* carrito */}
            <Drawer
              open={openCart}
              placement="right"
              size={500}
              nonce={undefined}
              onClose={() => setOpen(false)}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              <div className="mb-2 flex items-center justify-between p-4 absolute right-0">
                {/* <Typography variant="h5" color="blue-gray">
            Carrito
          </Typography> */}
                <IconButton
                  variant="text"
                  color="blue-gray"
                  nonce={undefined}
                  onClick={() => setOpen(!openCart)}
                  onResize={undefined}
                  onResizeCapture={undefined}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </IconButton>
              </div>
              <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 xl:p-10 2xl:p-8  dark:bg-gray-900 dark:text-gray-100">
                <h2 className="text-2xl font-semibold ">Carrito</h2>
                <ul className="flex flex-col divide-y divide-gray-700   overflow-y-auto h-[calc(100vh-345px)]">
                  <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/00ab66c9177a43cba35aaeaa0001c726_9366/Zapatillas_Forum_Bonega_Blanco_GX4414_01_standard.jpg"
                        alt="Polaroid camera"
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">
                              Polaroid camera
                            </h3>
                            <p className="text-sm dark:text-gray-400">
                              Classic
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">S/59.99</p>
                            <p className="text-sm line-through dark:text-gray-600">
                              S/75.50
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <select
                            aria-label="Select quantity"
                            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                          >
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                          </select>
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current ml-3"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/feb250ed4cf9485fa566af4800b50bb6_9366/Zapatillas_Forum_Bonega_Blanco_IG9678_01_standard.jpg"
                        alt="Replica headphones"
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">
                              Replica headphones
                            </h3>
                            <p className="text-sm dark:text-gray-400">White</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">S/99.95</p>
                            <p className="text-sm line-through dark:text-gray-600">
                              S/150
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <select
                            aria-label="Select quantity"
                            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                          >
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                          </select>
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current ml-3"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/1c014421514741d08c2b5cf6bbfb4780_9366/Zapatillas_Forum_Bonega_Blanco_IG0280_01_standard.jpg "
                        alt="Set of travel chargers"
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">
                              Set of travel chargers
                            </h3>
                            <p className="text-sm dark:text-gray-400">Black</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">S/88.99</p>
                            <p className="text-sm line-through dark:text-gray-600">
                              S/115.99
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <select
                            aria-label="Select quantity"
                            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                          >
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                          </select>
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current ml-3"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div className="flex w-full space-x-2 sm:space-x-4">
                      <img
                        className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src="https://assets.adidas.com/images/w_600,f_auto,q_auto/1c014421514741d08c2b5cf6bbfb4780_9366/Zapatillas_Forum_Bonega_Blanco_IG0280_01_standard.jpg "
                        alt="Set of travel chargers"
                      />
                      <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold leadi sm:pr-8">
                              Set of travel chargers
                            </h3>
                            <p className="text-sm dark:text-gray-400">Black</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-semibold">S/88.99</p>
                            <p className="text-sm line-through dark:text-gray-600">
                              S/115.99
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <select
                            aria-label="Select quantity"
                            className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                          >
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                          </select>
                          <button
                            type="button"
                            className="flex items-center px-2 py-1 pl-0 space-x-1"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="w-4 h-4 fill-current ml-3"
                            >
                              <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                              <rect
                                width="32"
                                height="200"
                                x="168"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="240"
                                y="216"
                              ></rect>
                              <rect
                                width="32"
                                height="200"
                                x="312"
                                y="216"
                              ></rect>
                              <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                            </svg>
                            <span>Remover</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <!-- Sub total --> */}
                <div className=" h-full w-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
                  <div className="mb-2 flex justify-between">
                    <p className="text-gray-700">Subtotal</p>
                    <p className="text-gray-700">S/129.99</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-700">Delivery</p>
                    <p className="text-gray-700">S/4.99</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-bold dark:text-[var(--dark-mode)]">
                      Total
                    </p>
                    <div className="">
                      <p className="mb-1 text-lg font-bold dark:text-[var(--dark-mode)]">
                        S/134.98
                      </p>
                      {/* <p className="text-sm text-gray-700 uppercase">Incluye igv</p> */}
                    </div>
                  </div>
                  <Link href={'/carrito'} onClick={() => setOpen(!openCart)}>
                    <span className="mt-6 w-full rounded-md bg-black py-1.5  text-blue-50 hover:bg-blue-gray-900 font-semibold">
                      COMPRAR AHORA
                    </span>
                  </Link>
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
})
