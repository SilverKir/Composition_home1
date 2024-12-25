import { CardButtonProps } from "./CardButton";
import { CardButton } from "./CardButton";

export interface CardProps {
    children?: React.ReactNode;
    cardTitle: string;
    cardText: string;
    className?: string;
    cardButton: CardButtonProps;
}

export const Card = ({
    children,
    cardTitle,
    cardText,
    className,
    cardButton,
}: CardProps) => {
    return (
        <div className={`card ${className}`}>
            {children}
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <CardButton {...cardButton} />
            </div>
        </div>
    );
}