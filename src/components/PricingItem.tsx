import { useEffect, useState } from 'react';

interface Props {
    tierName: string;
    description: string;
    prices: {
        isYearly: boolean;
        isPix: boolean;
        from?: string;
        to: string;
        period: string;
        rule?: string;
    }[];
    features: string[];
    buttonText: string;
    prefered?: boolean;
    yearlyMode: boolean;
    ccMode: boolean;
    paymentUrl: string;
    pixModal: string;
}

export default function PricingItem(props: Props) {
    const { tierName, description, prices, features, buttonText, prefered, yearlyMode, ccMode, paymentUrl, pixModal } = props;

    const [price, setPrice] = useState(prices[0]);

    useEffect(() => {
        setPrice(prices.find(price => price.isYearly === yearlyMode && price.isPix === !ccMode) || prices[0]);
    }, [yearlyMode, ccMode]);

    const openPaymentUrl = () => {
        if (price.isPix) {
            (document.getElementById(pixModal) as HTMLDialogElement).showModal();
        } else {
            const multiplier = price.isYearly ? 1 : 12;
            const payment = (price.isYearly ? +price.to * multiplier : +price.to).toFixed(2).replace('.', ',');
            window.open(`${paymentUrl}${payment}`,'_blank');
        }
    }

    return (
        <div 
            className={`card bg-white shadow-xl rounded-box text-black h-fit ${prefered && 'card-bordered border-primary border-2'}`}
        >
            <div className="card-body relative">
                {prefered && <div className="absolute -top-2.5 inset-x-0 m-auto badge badge-primary text-white">Recomendado</div>}
                <span className='font-semibold text-lg'>{tierName}</span>
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
                <button onClick={openPaymentUrl}
                    className={`btn btn-primary mt-auto uppercase text-white ${!prefered && 'btn-outline'}`}>
                        {buttonText}
                </button>
            </div>
        </div>
    )
}