'use client'
import About from "./Components/About";
import ArtSection from "./Components/ArtSection";
import Cocktails from "./Components/Cocktails";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
    return (
        <main className="bg-black/70">
            <Navbar />
            <Hero />
            <Cocktails />
            {/*
            */}
            <About />
            <ArtSection />
        </main>
    );
}
