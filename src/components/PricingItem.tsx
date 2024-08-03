import { useEffect, useState } from 'react';

interface Props {
    tierName: string;
    description: string;
    prices: {
        isYearly: boolean;
        from?: string;
        to: string;
        period: string;
        rule?: string;
    }[];
    features: string[];
    buttonText: string;
    prefered?: boolean;
    yearlyMode: boolean;
}

export default function PricingItem(props: Props) {
    const { tierName, description, prices, features, buttonText, prefered, yearlyMode } = props;

    const [price, setPrice] = useState(prices[0]);

    useEffect(() => {
        setPrice(prices.find(price => price.isYearly === yearlyMode) || prices[0]);
    }, [yearlyMode]);

    return (
        <div 
            className={`card bg-white shadow-xl rounded-box text-black h-fit ${prefered && 'card-bordered border-primary border-2'}`}
        >
            <div className="card-body">
                <div className='flex align-center w-100 justify-between'>
                    <span className='font-semibold text-lg'>{tierName}</span>
                    {prefered && <div className="badge badge-primary badge-outline">Recomendado</div>}
                </div>
                <span className='font-light text-sm'>{description}</span>
                <div>
                    <div>
                        {!!price.from && <span className='line-through text-sm text-black/[.6]'>R${price.from}</span>}
                        <span className='font-bold text-3xl'> R${price.to} </span>
                        <span>{price.period}</span>
                    </div>
                    <span className='text-sm text-black/[.6]'>{price.rule}</span>
                </div>
                <ul className='list-none pl-0'>
                    {features.map((feature, i) => (
                        <li key={i} className='text-sm text-black/[.8]'>✅ {feature}</li>
                    ))}
                </ul>
                <button className={`btn btn-primary mt-auto uppercase text-white ${!prefered && 'btn-outline'}`}>{buttonText}</button>
            </div>
        </div>
    )
}