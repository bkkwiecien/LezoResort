'use client'

import { useState } from 'react'
import PricingTab from './PricingTab'

export default function PricingTable() {
  const [isAnnual, setIsAnnual] = useState<boolean>(true)

  return (
    <div id="Offer" className='flex justify-center items-center lg:px-20 py-20'>
        <div>
                    {/* Pricing toggle */}
            <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
                <div className="relative flex w-full justify-center p-2 bg-white dark:bg-slate-900 rounded-full">
                    <span className='text-slate-200 font-semibold text-3xl mb-1 text-center'>Cennik</span>
                </div>
            </div>

            <div className="max-w-sm mx-5 grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">

                {/* Pricing tab 1 */}
                <PricingTab
                yearly={isAnnual}
                popular={false}
                planName="1 Noc"
                price={1000}
                planDescription=""
                features={[
                    'Darmowy Parking i Wifi',
                    'Dostęp do jeziora',
                    'Czyste ręczniki i pościel',
                    'Domek Lezore (Jacuzzi, sauna, Kino domowe)',
                ]} />

                {/* Pricing tab 2 */}
                <PricingTab
                yearly={isAnnual}
                popular={true}
                planName="Weekend"
                price={900}
                planDescription="(1800zł za pakiet 2 nocy) Rabat naliczy się podczas finalizacji rezerwacji."
                features={[
                    '(Wszystko z poprzedniego planu)',
                    'Darmowy wynajem kajaków',
                    'Darmowy wynajem rowerów',
                    'MiniBar bez ograniczeń',
                ]} />

                {/* Pricing tab 3 */}
                <PricingTab
                yearly={isAnnual}
                popular={false}
                planName="Cały tydzień"
                price={750}
                planDescription="(4500zł za pakiet 6 nocy) Rabat naliczy się podczas finalizacji rezerwacji."
                features={[
                    '(Wszystko z poprzedniego planu)',
                    'Dostęp do grilla elektryczny',
                    'Merch Lezoresort®',
                ]} />

            </div>
        </div>
    </div>
  )
}