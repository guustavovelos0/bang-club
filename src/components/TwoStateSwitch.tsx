interface Props {
    leftLabel: string;
    rightLabel: string;
    disabled?: boolean;
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    className?: string;
}

export default function TwoStateSwitch({ className, leftLabel, rightLabel, state: [currState, setState], disabled = false }: Props) {
    return (
            <div className='flex flex-col items-center text-center'>
                <input
                    id={`${leftLabel}${rightLabel}-toggle`}
                    type="checkbox"
                    disabled={disabled}
                    className={`toggle border-primary bg-primary [--tglbg:white] hover:bg-primary/[0.7] ${className || ''}`}
                    onChange={() => setState((prevState) => !prevState)}
                    checked={currState} />
                <label htmlFor={`${leftLabel}${rightLabel}-toggle`} className='font-semibold'>{currState ? rightLabel : leftLabel}</label>
            </div>
    );
}