import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section id="Hero" className='max-container padding-container flex flex-col gap-20 py-10 pb-32 
    md:gap-28 lg:py-20 xl:flex-row'>
      <div className='hero-map' />

      <div className='relative z-20 felx flex-1 flex-col xl:w-1/2'>
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-50px] w-10 lg:w-[50px]"
        />
        <h1 className='bold-52 lg:bold-88'>Lezore Resort</h1>
        <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
        Zapraszamy do naszego wyjątkowego resortu na Mazurach! Otoczony malowniczą przyrodą,
        gwarantuje niezapomniane chwile w sercu polskiej krainy jezior. Relaks,
         przygoda i autentyczność czekają na Ciebie
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className='bold-16 lg:bold-20 text-blue-70'>
            58
            <a className='regular-16 lg:regular-20 ml-1 underline' href="https://www.tripadvisor.com/">Wspaniałych opinii</a>
          </p>
        </div>

        <a href="https://airbnb.com" className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="ZAREZERWUJ TERAZ" 
            variant="btn_green"
          />
          {/* <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="btn_white_text" 
          /> */}
        </a>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Mazury</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Droga z Warszawy</p>
              <p className="bold-20 text-white">~1.5 h</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Droga z Olsztyna</p>
              <p className="bold-20 text-white">~30 min</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero