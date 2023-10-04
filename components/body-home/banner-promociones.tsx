import React from 'react'

const productosRecienLlegados = [
  {
    marca: 'Adidas',
    modelo: 'Zapatillas Forum Bonega Blanco Originals',
    img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/621315/01/mod01/fnd/EEA/fmt/png/Camiseta-BETTER-CLASSICS-para-hombre',
  },
  {
    marca: 'Adidas',
    modelo: 'Zapatillas Forum Bonega Blanco Originals',
    img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/621436/01/mod01/fnd/EEA/fmt/png/Chaqueta-corta-textil-DARE-TO',
  },
  {
    marca: 'Nike',
    imgProduct: 'https://picsum.photos/246/240?random=5',
    modelo: 'Zapatillas Forum Bonega Blanco Originals',
    img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/621291/01/mod01/fnd/EEA/fmt/png/Camisa-Downtown-de-pana-para-mujer',
  },
  {
    marca: 'Puma',
    modelo: 'Zapatillas Forum Bonega Blanco Originals',
    img: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/621429/01/mod01/fnd/EEA/fmt/png/Camiseta-de-manga-larga-DARE-TO-para-mujer',
  },
]
export function BannerPromociones() {
  return (
    <div className="py-16 ">
      <div className=" mx-10 px-6  md:px-12 xl:px-0">
        <h2 className="xl:text-3xl  text-xl text-center py-10 font-bold">
          NUEVOS INGRESOS DE ADIDAS
        </h2>
        <div className="mx-auto grid gap-y-10 gap-6 md:gap-y-16  lg:w-full 2xl:grid-cols-4 laptop:grid-cols-3  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-items-center">
          {productosRecienLlegados.map((el, index) => (
            <div key={index}>
              <div className=" hover:border-black hover:dark:border-white dark:rounded-sm  delay-100 ease-linear    dark:border-[var(--dark-mode)]   border border-spacing:[1px] border-transparent">
                <div className="">
                  <div className="flex justify-center w-full   relative ">
                    {' '}
                    <img src={el.img} alt="" className="rounded-t-xl" />
                  </div>
                  <div className="dark:bg-[var(--dark-mode)] ">
                    <div className="mb-1 flex items-center justify-between">
                      <div
                        color="blue-gray"
                        className="text-base font-medium dark:text-white"
                      >
                        {el.marca}
                      </div>
                    </div>
                    <div className="font-semibold text-sm   opacity-75 mb-1 dark:text-white">
                      {el.modelo}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
