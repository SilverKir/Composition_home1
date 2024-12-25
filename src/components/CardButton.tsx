export interface CardButtonProps {
    href?: string;
    className?: string;
    buttonName?: string;
}

export const CardButton: React.FC<CardButtonProps> = (props) => {
    const { href = "#", buttonName, className } = props;
    return (
        <a href={href} className={`card-button ${className}`}>
            {buttonName}
        </a>
    )
}