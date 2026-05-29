
export const MainHeading = ({ heading }) => {
    return (
        <p className='text-lg font-semibold text-text pb-2'>{heading}</p>
    )
}

export const SecondHeading = ({ heading }) => {
    return (
        <p className='text-md font-semibold text-text pb-2'>{heading}</p>
    )
}

export const NormalText = ({ text }) => {
    return (
        <p className='text-text text-sm'>{text}</p>
    )
}

export const ParagraphCard = ({ className, children }) => {
    return (
        <div className={`${className} text-justify flex flex-col gap-2`}>{children}</div>
    )
}



export const UnorderList = ({ className, text }) => {
    return (
        <li className={`${className} text-text text-sm ml-8 leading-none`}>{text}</li>
    )
}

