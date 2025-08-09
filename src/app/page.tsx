'use client'
import Cocktails from "./Components/Cocktails";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
    return (
        <main>
            {/*
            */}
            <Navbar />
            <Hero />
            <Cocktails />
        </main>
    );
}
