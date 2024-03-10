
import BentoGridBox from "@/components/ui/bento-grid-box";

const LandingPageCategories = () => {
    return (
        <div className="w-full bg-white text-black text-xl border-b-2 px-5 md:px-10 lg:px-20">
            <div className="w-full grid grid-cols-3">
                {items.map((item, index) => (
                    <BentoGridBox key={index} {...item} />
                ))}
            </div>
        </div>
    );
}

const items = [
    {
        title: "Why Defense Careers?",
        description: "Learn why a career in defense contracting is a great choice for you.",
        coverImg: "/img/hero/1.jpg",
        className: "col-span-2 bg-gradient-to-r from-cyan-500 to-cyan-30 aspect-[2/1]",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
    {
        title: "About Us",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        coverImg: "/img/hero/1.jpg",
        className: "bg-gradient-to-l from-cyan-500 to-cyan-30 aspect-square",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
    {
        title: "DoD Contractors",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        coverImg: "/img/hero/1.jpg",
        className: "col-span-3 bg-gradient-to-r from-cyan-500 to-cyan-30 aspect-[3/1]",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
    {
        title: "Career Fields",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        coverImg: "/img/hero/1.jpg",
        className: "bg-gradient-to-l from-cyan-500 to-cyan-30 aspect-square",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
    {
        title: "Blog",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        coverImg: "/img/hero/1.jpg",
        className: "col-span-2 bg-gradient-to-r from-cyan-500 to-cyan-30 aspect-[2/1]",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
    {
        title: "Resources",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        coverImg: "/img/hero/1.jpg",
        className: "col-span-2 bg-gradient-to-r from-cyan-500 to-cyan-30 aspect-[2/1]",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
    {
        title: "FAQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        coverImg: "/img/hero/1.jpg",
        className: "bg-gradient-to-r from-cyan-500 to-cyan-30 aspect-square",
        color: "bg-gradient-to-r from-cyan-500 to-cyan-300",
        href: "/why-defense-careers",
        buttonString: "Learn More"
    },
]


export default LandingPageCategories;

