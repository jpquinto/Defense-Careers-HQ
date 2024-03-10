import Hero from "@/components/hero";
import LandingPageCategories from "@/components/landing-page-categories";

export default function Home() {
    return (
        <main className="flex flex-col min-h-[100dvh] w-full bg-white">
            <div className="flex flex-col">
                <Hero />
                <h1>Rest of page</h1>
                {/* Welcome message */}
                <LandingPageCategories />
            </div>
        </main>
    );
}
