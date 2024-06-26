import {
  Drawer,
  Input,
  Card,
  Textarea,
  Select,
  Option,
} from '@material-tailwind/react'
import type { FormEvent } from 'react'
import { memo, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Link } from '@ui/link/link'

import { Button } from '../@ui/button/button'

export type FooterProps = Record<string, unknown>

export const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear()

  const [open, setOpen] = useState(false)

  const openDrawer = () => setOpen(true)
  const closeDrawer = () => setOpen(false)

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [documento, setDocumento] = useState('')

  const [telefono, setTelf] = useState('')
  const [direccion, setDireccion] = useState('')
  const [quejaReclamo, setQuejaReclamo] = useState('')
  const [detalleReclamo, setDetalleReclamo] = useState('')

  const [email, setEmail] = useState('')
  const [desable, setDesable] = useState(false)
  const [mensajeEnviado, setMensajeEnviado] = useState(false)

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDesable(true)
    setMensajeEnviado(true)
    await fetch('/api/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        nombre,
        apellido,
        documento,
        email,
        telefono,
        direccion,
        quejaReclamo,
        detalleReclamo,
      }),
    })

    setMensajeEnviado(false)
    // setDesable(false)
    setNombre('')
    setEmail('')
    setTelf('')
    setApellido('')
    setDocumento('')
    setDireccion('')
    setQuejaReclamo('')
    setDetalleReclamo('')
  }
  useEffect(() => {
    if (
      nombre.length <= 3 ||
      email.length <= 3 ||
      telefono.length <= 3 ||
      apellido.length <= 3 ||
      documento.length <= 3 ||
      direccion.length <= 3 ||
      quejaReclamo.length <= 3 ||
      detalleReclamo.length <= 10
    ) {
      setDesable(false)
    } else {
      setDesable(true)
    }
  }, [nombre, telefono, email, apellido, documento, direccion, quejaReclamo, detalleReclamo])


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })


  
  return (
    <div>
      <footer className="bg-black xl:bg-black font-sans dark:bg-white mt-10">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:gap-y-10 lg:grid-cols-1">
            <div className="sm:col-span-2 flex flex-col justify-center items-center">
              <div>
                <svg
                  width="1273"
                  height="1273"
                  viewBox="0 0 1273 1273"
                  xmlns="http://www.w3.org/2000/svg"
                  className="xl:fill-white fill-white w-32 h-32"
                >
                  <path d="M579.51 792.57C576.8 792.82 574.86 793.16 572.91 793.17C551.26 793.21 529.62 793.15 507.97 793.22C502.85 793.24 498.91 791.38 495.76 787.31C476.92 762.93 457.86 738.72 439.23 714.19C434.77 708.31 429.91 705.85 422.51 706.23C410.95 706.82 399.34 706.39 387.28 706.39C387.28 735.21 387.28 763.66 387.28 792.44C365.25 792.44 343.69 792.44 322.03 792.44C322.03 704.16 322.03 616.06 322.03 527.72C323.47 527.58 324.73 527.34 325.98 527.35C371.14 527.38 416.3 527.04 461.45 527.63C485.78 527.95 508.76 533.99 528.84 548.72C549.71 564.03 559.99 584.83 561.02 610.41C561.73 628.2 558.98 645.26 549.24 660.64C540.09 675.08 526.86 684.55 511.56 691.47C509 692.63 506.42 693.76 503.4 695.1C528.86 727.69 553.94 759.82 579.51 792.57ZM387.58 650.11C411.99 649.53 436.03 649.39 460.02 648.1C467.02 647.72 474.47 645.16 480.61 641.66C492.91 634.66 496.13 622.95 493.92 609.46C491.95 597.43 484.05 591.25 472.91 588.38C470.01 587.63 467.04 586.85 464.07 586.71C448.06 585.97 432.05 585.3 416.03 584.86C406.63 584.6 397.21 584.81 387.58 584.81C387.58 606.58 387.58 627.72 387.58 650.11Z" />
                  <path d="M1033.68 735.79C1083.53 735.79 1132.26 735.79 1181.24 735.79C1181.24 754.93 1181.24 773.79 1181.24 792.92C1101.29 792.92 1021.37 792.92 940.97 792.92C940.97 785.23 940.94 777.66 940.98 770.08C941 764.63 941.3 759.18 941.12 753.75C940.97 749.36 942.89 746.1 945.67 743.03C974.18 711.61 1002.66 680.18 1031.14 648.74C1049.23 628.77 1067.3 608.79 1085.37 588.8C1086.39 587.68 1087.3 586.46 1089.23 584.11C1085.15 584.11 1082.35 584.11 1079.55 584.11C1037.53 584.11 995.51 584.11 953.49 584.11C946.17 584.11 945.6 583.61 945.58 576.39C945.54 561.91 945.55 547.42 945.58 532.94C945.59 527.53 946.68 526.46 952.19 526.46C1027.19 526.5 1102.2 526.57 1177.2 526.52C1181.01 526.52 1182.09 527.67 1182.03 531.43C1181.89 540.16 1182.1 548.9 1182.39 557.62C1182.71 566.87 1179.61 574.83 1173.5 581.57C1155.67 601.19 1137.67 620.66 1119.83 640.28C1092.25 670.6 1064.75 700.99 1037.23 731.36C1036.22 732.48 1035.33 733.72 1033.68 735.79Z" />
                  <path d="M307.91 585.81C256.92 585.81 206.32 585.81 155.36 585.81C155.36 602.12 155.36 618.21 155.36 634.72C200.46 634.72 245.56 634.72 290.96 634.72C290.96 654.12 290.96 673.11 290.96 692.48C245.85 692.48 200.89 692.48 155.38 692.48C155.38 726.17 155.38 759.48 155.38 792.99C133.52 792.99 112.2 792.99 90.53 792.99C90.53 705.22 90.53 617.45 90.53 529.43C162.98 529.43 235.31 529.43 307.91 529.43C307.91 548.18 307.91 566.74 307.91 585.81Z" />
                  <path d="M841.3 793.07C818.9 793.07 797.27 793.07 775.12 793.07C775.12 724.13 775.12 655.28 775.12 585.94C746.31 585.94 718.02 585.94 689.5 585.94C689.5 566.44 689.5 547.43 689.5 528.08C768.53 528.08 847.55 528.08 926.75 528.08C926.75 547.18 926.75 566.08 926.75 585.51C898.38 585.51 870.1 585.51 841.3 585.51C841.3 654.91 841.3 723.77 841.3 793.07Z" />
                  <path d="M600.22 527.69C621.77 527.69 643.07 527.69 664.7 527.69C664.7 616.08 664.7 704.33 664.7 792.96C643.35 792.96 621.94 792.96 600.22 792.96C600.22 704.75 600.22 616.48 600.22 527.69Z" />
                  <path d="M791.32 917.11C801.52 932.35 811.45 947.18 821.83 962.68C809.3 962.68 797.6 962.83 785.91 962.52C784.22 962.48 782.12 960.56 781.02 958.95C774.87 949.97 768.86 940.89 763.01 931.72C757.95 923.8 752.68 921.53 744.42 924.41C744.42 936.75 744.42 949.19 744.42 961.96C733.47 961.96 722.83 961.96 711.66 961.96C711.66 959.85 711.66 958.01 711.66 956.17C711.61 919.46 711.56 882.75 711.52 846.05C711.52 844.47 711.59 842.9 711.63 841.32C711.72 838.01 713.46 836.18 716.73 836.26C737.35 836.73 758.04 836.47 778.58 838.03C797.52 839.47 809.76 852.54 812.16 871.47C814 886.02 812 899.59 800.46 910.1C797.73 912.57 794.61 914.6 791.32 917.11ZM744.57 892.06C751.19 892.06 757.6 892.13 764 892.02C766.7 891.97 769.48 891.87 772.08 891.21C777.39 889.88 780.43 885.18 780.35 879.11C780.28 873.63 777.86 869.79 772.77 869.16C763.47 868.02 754.09 867.59 744.57 866.85C744.57 875.63 744.57 883.58 744.57 892.06Z" />
                  <path d="M679.69 899.78C679.4 932.57 659.02 958.37 628.18 964.61C595.73 971.18 561.67 948.31 555.98 915.75C552.23 894.28 554.78 873.71 569.37 856.55C586.12 836.86 607.98 829.83 632.85 836.41C657.71 842.99 672.92 859.9 678.11 885.28C679.08 890.02 679.18 894.94 679.69 899.78ZM646.53 899.38C646.09 895.79 645.92 892.92 645.35 890.12C642.98 878.44 632.56 868.19 621.41 866.4C609.29 864.45 597.75 870.06 591.72 881.54C585.25 893.85 585.52 906.45 592.39 918.5C598.79 929.74 608.7 934.67 621.65 932.54C633.85 930.53 641.21 923 644.44 911.36C645.58 907.27 645.93 902.94 646.53 899.38Z" />
                  <path d="M304.05 939.81C310.22 932 316.42 924.16 322.83 916.04C326.34 918.89 329.57 921.65 332.95 924.21C340.15 929.67 347.85 933.96 357.32 933.41C359.16 933.3 361.35 933.37 362.74 932.41C365.18 930.74 368.7 928.43 368.82 926.23C368.94 923.98 365.97 920.71 363.54 919.38C359.46 917.14 354.75 916.05 350.29 914.52C345.42 912.85 340.49 911.34 335.66 909.56C317.06 902.69 309.89 891.88 310.51 871.87C311.03 855.07 321.54 841.23 338.4 836.79C361.1 830.81 381.11 836.53 398.39 852.32C400.54 854.29 400.55 855.75 398.93 858.06C393.92 865.21 389.15 872.53 384.04 880.13C379.82 877.26 375.93 874.07 371.57 871.81C366.94 869.41 361.92 867.66 356.92 866.13C354.86 865.5 352.04 865.5 350.19 866.44C347.45 867.83 343.88 869.93 343.18 872.44C342.26 875.73 345.57 878.24 348.91 879.36C354.88 881.37 360.9 883.21 366.88 885.19C370.55 886.4 374.26 887.53 377.81 889.04C395.54 896.56 403.51 909.24 402.29 927.72C401.17 944.72 389.72 958.29 372.49 963.02C348.89 969.5 317.84 959.02 304.05 939.81Z" />
                  <path d="M465.9 926.14C465.9 938.6 465.9 950.3 465.9 962.28C455.14 962.28 444.79 962.28 434.04 962.28C433.92 960.15 433.7 958.19 433.7 956.23C433.63 919.27 433.59 882.31 433.55 845.34C433.55 843.91 433.59 842.48 433.68 841.05C433.87 837.96 435.58 836.2 438.62 836.27C456.8 836.66 475.06 836.21 493.12 837.86C514.46 839.81 526.49 852.68 529.76 874.14C533.55 899.05 518.59 921.08 494.36 925.24C486.96 926.51 479.23 925.9 471.65 926.13C469.97 926.18 468.29 926.14 465.9 926.14ZM466.55 895.92C473.76 895.44 480.61 895.26 487.39 894.45C493.42 893.73 496.94 889.28 497.43 882.85C497.96 875.9 495.5 870.61 489.96 869.55C482.34 868.09 474.52 867.67 466.55 866.78C466.55 876.81 466.55 885.93 466.55 895.92Z" />
                  <path d="M838.3 868.27C838.3 857.52 838.3 847.52 838.3 837.23C871.18 837.23 903.92 837.23 936.88 837.23C936.88 847.32 936.88 857.3 936.88 867.73C926.03 867.73 915.2 867.73 903.86 867.73C903.86 899.35 903.86 930.52 903.86 961.98C892.83 961.98 882.31 961.98 871.25 961.98C871.25 930.74 871.25 899.72 871.25 868.27C860.03 868.27 849.34 868.27 838.3 868.27Z" />
                  <path d="M951.78 872.21C951.78 866.04 951.78 860.22 951.78 854.12C1020.38 854.12 1088.81 854.12 1157.54 854.12C1157.54 860.21 1157.54 866.14 1157.54 872.21C1088.98 872.21 1020.64 872.21 951.78 872.21Z" />
                  <path d="M295.34 853.83C295.34 860.09 295.34 866.05 295.34 872.25C226.96 872.25 158.8 872.25 90.26 872.25C90.26 866.19 90.26 860.14 90.26 853.83C158.52 853.83 226.68 853.83 295.34 853.83Z" />
                  <path d="M951.58 903.21C951.58 897.03 951.58 890.94 951.58 884.62C1010.88 884.62 1070.02 884.62 1129.45 884.62C1129.45 890.8 1129.45 896.87 1129.45 903.21C1070.14 903.21 1011 903.21 951.58 903.21Z" />
                  <path d="M295.37 884.56C295.37 890.92 295.37 896.89 295.37 903.17C236.24 903.17 177.3 903.17 118.11 903.17C118.11 897.04 118.11 890.95 118.11 884.56C177.09 884.56 236.04 884.56 295.37 884.56Z" />
                  <path d="M707.42 387.03C719.22 407.47 730.6 427.2 742.45 447.73C739.87 447.73 738.21 447.73 736.54 447.73C708.75 447.73 680.95 447.71 653.16 447.74C644.43 447.75 635.69 447.84 626.96 448.03C620.39 448.17 615.67 445.75 613.17 439.35C612.09 436.58 610.41 434.05 608.65 430.76C643.04 430.76 676.99 430.76 712.09 430.76C708.42 424.34 705.67 418.58 702.05 413.43C697.78 407.35 697 401.91 702.07 395.95C704.08 393.59 705.32 390.59 707.42 387.03Z" />
                  <path d="M579.33 387.17C596.71 417.16 613.75 446.58 631.2 476.69C635 470.07 638.76 464.08 641.96 457.8C644.61 452.6 648.07 449.87 654.19 450.63C657.98 451.1 661.87 450.72 666.65 450.72C654.78 471.32 643.25 491.31 631.41 511.85C629.58 509.01 627.98 506.72 626.58 504.31C608.77 473.6 591.04 442.85 573.15 412.19C569.8 406.45 569.39 401.38 573.92 396.06C575.98 393.62 577.31 390.55 579.33 387.17Z" />
                  <path d="M683.05 380.18C665.64 350.13 648.57 320.68 631.11 290.54C627.32 297.17 623.53 303.16 620.4 309.48C617.75 314.83 614.03 317.16 608.09 316.58C604.3 316.21 600.45 316.51 595.76 316.51C607.66 295.84 619.18 275.82 630.96 255.34C632 256.95 632.85 258.16 633.58 259.43C651.98 291.12 670.31 322.85 688.83 354.47C692.43 360.62 692.97 366.07 688.09 371.77C686.18 374 685 376.86 683.05 380.18Z" />
                  <path d="M660.36 426.33C677.5 396.59 694.21 367.6 711.61 337.41C704.64 337.41 698.57 336.92 692.61 337.53C685.38 338.27 680.36 336.38 677.73 329.17C676.68 326.3 674.74 323.76 672.96 320.66C696.04 320.66 718.57 320.66 741.73 320.66C737.43 328.19 733.42 335.24 729.38 342.28C714.53 368.09 699.64 393.87 684.86 419.73C681.89 424.93 677.98 427.37 671.82 426.43C668.36 425.9 664.76 426.33 660.36 426.33Z" />
                  <path d="M550.59 430.12C558.3 430.12 565.3 430.38 572.27 430.04C577.81 429.76 581.63 431.45 583.92 436.72C585.43 440.2 587.54 443.42 589.58 447.12C566.46 447.12 543.86 447.12 520.64 447.12C521.7 445.03 522.57 443.13 523.6 441.33C541.37 410.41 559.23 379.54 576.91 348.57C580.37 342.51 584.89 339.56 592 340.6C595.03 341.04 598.18 340.67 602.11 340.67C584.78 370.74 567.83 400.17 550.59 430.12Z" />
                  <path d="M654.28 337.38C619.49 337.38 585.57 337.38 550.7 337.38C554.44 343.9 557.55 349.99 561.3 355.65C564.59 360.62 564.86 364.95 561.17 369.79C558.88 372.79 557.26 376.3 554.96 380.23C543.25 359.99 531.9 340.37 520.23 320.21C522.1 320.1 523.43 319.95 524.77 319.95C561.32 319.89 597.88 319.95 634.43 319.71C641.86 319.66 647.23 321.63 649.78 329.18C650.67 331.82 652.46 334.14 654.28 337.38Z" />
                  <path d="M951.5 933.3C951.5 926.97 951.5 921 951.5 914.77C998.89 914.77 1046.08 914.77 1093.58 914.77C1093.58 920.87 1093.58 926.94 1093.58 933.3C1046.33 933.3 999.13 933.3 951.5 933.3Z" />
                  <path d="M154.17 933.41C154.17 926.95 154.17 920.98 154.17 914.76C201.27 914.76 248.19 914.76 295.29 914.76C295.29 921.05 295.29 927.14 295.29 933.41C248.19 933.41 201.36 933.41 154.17 933.41Z" />
                </svg>
              </div>
              {/* <h1 className="max-w-lg xl:max-w-none text-xl font-semibold tracking-tight  text-black xl:text-white xl:text-2xl dark:text-black">
                Suscríbase para recibir nuestras promociones.
              </h1>

              <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                <input
                  id="email"
                  type="text"
                  className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Correo electrónico"
                />

                <span className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transForm md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Suscribir
                </span>
              </div> */}
            </div>

            <div>
              <p className="font-bold  text-white xl:text-white  dark:text-black uppercase text-center mt-0">
                Categorias
              </p>

              <div className="flex justify-around xl:justify-evenly xl:mt-10 md:justify-between items-center mt-5 ">
                <Link
                  href="/hombre"
                  className="uppercase text-xs md:ml-3 text-white xl:text-white transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Hombre
                </Link>
                <Link
                  href="/mujer"
                  className="uppercase text-xs md:ml-3 text-white xl:text-white transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Mujer
                </Link>
                <Link
                  href="/ninos"
                  className="uppercase text-xs md:ml-3 text-white  xl:text-white transition-colors duration-300 dark:text-black dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Niños
                </Link>
              </div>
            </div>
          </div>

          <hr className="mt-6 border-gray-200  md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between   xl:flex xl:justify-around 2xl:flex 2xl:justify-around ">
            <div className=" flex justify-center mb-5 w-full">
              <Button
                className=" flex justify-center my-3"
                onClick={openDrawer}
              >
                <img
                  src={`/static/images/libroR/${
                    isDesktopOrLaptop ? 'libroWhite.png' : 'libroWhite.png'
                  }`}
                  alt=""
                  className="h-12"
                />
              </Button>
            </div>

            <div className="flex gap-4 hover:cursor-pointer w-full justify-center">
              <a
                href="https://www.facebook.com/fritzsportsac/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="fill-white xl:fill-white"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>{' '}
                  </g>
                </svg>
              </a>
              {/* <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              /> */}
              <a
                href="https://www.instagram.com/fritzsport/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="fill-white mt-[0.1rem] xl:fill-white"
                  width="25px"
                  height="25px"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>Instagram [#167]</title>{' '}
                    <desc>Created with Sketch.</desc> <defs> </defs>{' '}
                    <g
                      id="Page-1"
                      strokeWidth="0.3"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {' '}
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-340.000000, -7439.000000)"
                        className="fill-white mt-[0.1rem] xl:fill-white"
                      >
                        {' '}
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          {' '}
                          <path
                            d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792"
                            id="instagram-[#167]"
                          >
                            {' '}
                          </path>{' '}
                        </g>{' '}
                      </g>{' '}
                    </g>{' '}
                  </g>
                </svg>
              </a>
              {/* <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                className=""
                width="30"
                height="30"
                alt="gt"
              /> */}
              {/* <img
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="30"
                height="30"
                alt="pn"
              /> */}
              <a
                href="https://www.tiktok.com/@fritzsport"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="fill-white xl:fill-white"
                  width="25px"
                  height="30px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>tiktok</title>{' '}
                    <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>{' '}
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <p className=" p-8 font-sans xl:text-sm text-start md:text-center md:text-lg md:p-4 text-white xl:text-white dark:text-[var(--dark-mode)]">
            {currentYear} <Link href="/">Fritz Sport</Link>. Todos los Derechos
            Reservados.
          </p>
        </div>
      </footer>
      {/* form Libro */}
      <Drawer
        open={open}
        className="flex justify-center w-full"
        placement="bottom"
        size={1000}
        nonce={undefined}
        onClose={closeDrawer}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <Button
          className="absolute top-3 right-3"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Button>
        <Card
          color="transparent"
          shadow={false}
          nonce={undefined}
          className="2xl:w-2/6 w-4/4"
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <div className="flex justify-center">
            <div
              className={`${
                !mensajeEnviado ? 'hidden' : 'block'
              } absolute  top-8 xl:w-full w-5/6 py-3 flex justify-center text-center bg-blue-600 rounded-lg text-white `}
            >
              Solicitud Enviada
            </div>
          </div>
          <form className="mt-8 mb-2 w-[full]" onSubmit={(e) => sendMail(e)}>
            <div className=" flex flex-col  2xl:gap-3 laptop:gap-8 gap-x-6  gap-y-3">
              <h6 className="mb-3 text-black text-2xl font-semibold text-center">
                Libro de Reclamaciones
              </h6>
              {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-1 lg:grid-cols-2 xl:grid-cols-2 laptop:grid-cols-2 2xl:grid-cols-2 laptop:gap-y-6 2xl:gap-y-3  gap-y-2  "></div> */}
              <Input
                size="lg"
                label="Nombres"
                nonce={undefined}
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Input
                value={apellido}
                size="lg"
                label="Apellidos"
                nonce={undefined}
                onChange={(e) => setApellido(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Input
                value={documento}
                size="lg"
                label="Doc de Identidad"
                nonce={undefined}
                onChange={(e) => setDocumento(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Input
                value={telefono}
                size="lg"
                label="Numero de Teléfono"
                nonce={undefined}
                onChange={(e) => setTelf(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />{' '}
              <Input
                // className="w-[80%]"
                size="lg"
                label="Dirección"
                value={direccion}
                nonce={undefined}
                onResize={undefined}
                onChange={(e) => setDireccion(e.target.value)}
                onResizeCapture={undefined}
              />
              <Input
                // className="w-[80%]"
                value={email}
                size="lg"
                label="Correo Electrónico"
                nonce={undefined}
                onChange={(e) => setEmail(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
              <Select
                label="Queja o Reclamo"
                nonce={undefined}
                onResize={undefined}
                onResizeCapture={undefined}
                onChange={(e = 'Queja') => setQuejaReclamo(e)}
              >
                <Option value="Queja" className="w-[80%]">
                  Queja
                </Option>
                <Option value="Reclamo">Reclamo</Option>
              </Select>
              <Textarea
                value={detalleReclamo}
                size="md"
                label="Detalle de Reclamo o Queja"
                nonce={undefined}
                onChange={(e) => setDetalleReclamo(e.target.value)}
                onResize={undefined}
                onResizeCapture={undefined}
              />
            </div>
            <div className="w-full flex justify-center">
              {desable ? (
                <button
                  type="submit"
                  className="mt-2 px-8  py-2 rounded-lg bg-blue-600  text-white"
                >
                  Enviar
                </button>
              ) : (
                <Button className="mt-2 px-8  py-2 rounded-lg bg-red-500  text-white">
                  Enviar
                </Button>
              )}
            </div>
          </form>
        </Card>
      </Drawer>
    </div>
  )
})
