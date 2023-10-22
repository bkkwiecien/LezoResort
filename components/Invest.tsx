import React from 'react'
import Button from './Button'
import Image from 'next/image'

interface DownloadButtonProps {
  pdfUrl: string;
}

function DownloadButton({ pdfUrl }: DownloadButtonProps) {
  return (
    <a href={pdfUrl} download className="py-4 px-4 rounded-xl bg-white text-green-900 hover:bg-gray-300 transition duration-300">
      Pobierz biznes plan PDF
    </a>
    
    
  );
}

const Invest = () => {
  return (
    <section id="Invest" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Zainwestuj z nami.</h2>
          <p className="regular-16 text-gray-10">Pomożemy Ci znaleść najlepsze działki, zaprojektujemy i zbudujemy, a następnie będziemy zarządzać wynajmem Twojej nieruchomości. A w Czasie kiedy dom nie będzie wynajęty będziesz mógł/mogła z niego korzystać. A wszystkim zarządzisz z aplikacji HostHub.io</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <DownloadButton 
              pdfUrl="travell_app/public/BiznesPlan-v.1.0.pdf"
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image className="rounded-2xl" src="/construction.jpeg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default Invest