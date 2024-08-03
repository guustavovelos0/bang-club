import { useEffect, useState } from 'react';
import PricingItem from './PricingItem';
import PLANS from '../assets/plans.json';
import TwoStateSwitch from './TwoStateSwitch';
import { setYear } from 'date-fns';

export default function Pricing() {
    const pricing = PLANS;
    const paymentUrl = 'https://pay.infinitepay.io/bang_pub_and_gam/';

    const [yearlyMode, setYearlyMode] = useState(true);
    const [ccMode, setCCMode] = useState(true);

    useEffect(() => {
        if (!ccMode) setYearlyMode(true);
    }, [ccMode]);

    return (
        <section className='mx-auto'>
            <div className='flex flex-col items-center mb-4'>
                <div className='sm:w-[30vw] w-full grid grid-cols-2 gap-4'>
                    <TwoStateSwitch disabled={!ccMode} leftLabel="Mensal" rightLabel="Anual" state={[yearlyMode, setYearlyMode]}/>
                    <TwoStateSwitch leftLabel="Pix" rightLabel="Cartão de Crédito" state={[ccMode, setCCMode]}/>
                </div>
            </div>
            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-3`}>
                {pricing.map((props, i) => {
                    return <PricingItem key={i} ccMode={ccMode} paymentUrl={paymentUrl} yearlyMode={yearlyMode} {...props} />
                })}
            </div>
        </section>
    )
}