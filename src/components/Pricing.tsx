import { useState } from 'react';
import PricingItem from './PricingItem';
import PLANS from '../assets/plans.json';

export default function Pricing() {
    const pricing = PLANS;

    const [yearlyMode, setYearlyMode] = useState(true);

    return (
        <section className='mx-auto'>
            <div className='flex flex-col items-center mb-4'>
                <div className='flex items-center gap-4'>
                    <span className='font-semibold'>Mensal</span>
                    <input
                        id="period-toggle"
                        type="checkbox"
                        className="toggle border-primary bg-primary [--tglbg:white] hover:bg-primary/[0.7]"
                        onChange={() => setYearlyMode((yearlyMode) => !yearlyMode)}
                        checked={yearlyMode} />
                    <label htmlFor="period-toggle" className='font-semibold'>Anual</label>
                </div>
            </div>
            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-3`}>
                {pricing.map((props, i) => {
                    return <PricingItem key={i} yearlyMode={yearlyMode} {...props} />
                })}
            </div>
        </section>
    )
}