import { useState } from 'react';


export default function Features() {
    const features = [
        {
            title: 'Jogar à vontade',
            description: 'Venha jogar o mês todo sem se preocupar com o tempo',
            img: '/select-game.webp', 
        },
        {
            title: 'Sorteios exclusivos',
            description: 'Participe de sorteios exclusivos para membros',
            img: '/prize.webp', 
        },
        {
            title: 'Créditos para alugar jogos',
            description: 'Ganhe créditos para alugar jogos todos os meses',
            img: '/playing-home.webp', 
        },
        {
            title: 'Decidir os próximos jogos',
            description: 'Ajude a decidir quais serão os próximos jogos comprados para nosso acervo',
            img: '/choose-bg.webp', 
        },
        {
            title: 'Convidar amigos',
            description: 'Convide amigos para jogar de graça a primeira vez',
            img: '/invite-friends.webp', 
        },
        {
            title: 'Preços exclusivos',
            description: 'Tenha preços exclusivos em toda nossa lojinha e menu',
            img: '/buying.webp', 
        },
        {
            title: 'Compra antecipada',
            description: 'Compre antecipadamente em todos os nossos eventos especiais',
            img: '/playing-home.webp', 
        },
    ];

    const [selectedFeature, setSelectedFeature] = useState({idx: 0, ...features[0]});

    return (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
            <div className='flex flex-col gap-2'>
                {features.map((feature, idx) => {
                    return (
                        <div key={idx} className="collapse rounded-box bg-base-100 gap-2">
                            <input type="radio" id={`feature-${idx}`} name={`feature-${idx}`} onChange={() => setSelectedFeature({idx, ...feature})} checked={idx === selectedFeature.idx} />
                            <label htmlFor={`feature-${idx}`} className="collapse-title text-xl font-medium text-secondary">
                                {feature.title}
                            </label>    
                            <div className="collapse-content">
                                <p className='text-secondary'>{feature.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='max-sm:hidden'>
                <img src={selectedFeature.img} alt={selectedFeature.title} className='w-full max-h-[600px] object-cover object-top rounded-box m-0' />
            </div>
        </div>
    )
}