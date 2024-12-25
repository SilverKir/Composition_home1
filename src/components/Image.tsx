
export interface ImageProps {
    className?: string;
    src: string;
    alt: string;
}

export const Image = ({ className, src, alt }: ImageProps) => {
    return (
        <img src={src} className={`card-img ${className}`} alt={alt} />
    )
}