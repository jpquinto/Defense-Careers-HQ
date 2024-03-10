import { cn } from "@/lib/utils";


interface BentoGridBoxProps {
    title: string;
    description: string;
    coverImg: string;
    className: string;
    color: string;
    href: string;
    buttonString: string;
}

const BentoGridBox = ({
    title,
    description,
    coverImg,
    className,
    color,
    href,
    buttonString
}: BentoGridBoxProps) => {
    return (
        <div className={cn("", 
            className
        )}>
            {title}
        </div>
    )
}

export default BentoGridBox;