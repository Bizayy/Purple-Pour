'use client'
import About from "./Components/About";
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
        </main>
    );
}
